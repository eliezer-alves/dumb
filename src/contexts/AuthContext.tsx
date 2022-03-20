import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebase, auth } from '../services/firebase';

type User = {
	id: string;
	name: string;
	avatar: string;
}

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => void;
	signOut: () => void;
	handleNavigate: (service: string) => void;
}

type AuthContextProviderProps = {
	children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
	const navigate = useNavigate()
	const [user, setUser] = useState<User>()

	const handleSetUser = (firebaseUser: any) => {
		const { displayName, photoURL, uid } = firebaseUser;

		if (!displayName || !photoURL) {
			throw new Error('Missing information from Google Account.');
		}

		setUser({
			id: uid,
			name: displayName,
			avatar: photoURL
		});
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				handleSetUser(user)
			}
		})

		return () => {
			unsubscribe();
		}
	}, []);	

	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();

		const result = await auth.signInWithPopup(provider)

		if (result.user) {
			handleSetUser(result.user)
		}
	}

	async function signOut() {		
		if (window.confirm(`Tem certeza que não desej mais continuar como ${user?.name}?`)) {			
			firebase.auth().signOut().catch(function(error) {
				alert('Houve augum problema ao efetuar seu logout! Tente novamente.');
			});
		}

		setUser(undefined);
	}

	function handleNavigate(service: string) {
		if (!user) {
			navigate(`/${service}`)
		}

		navigate('/')
	}

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle, signOut, handleNavigate }}>
			{props.children}
		</AuthContext.Provider>
	);
}