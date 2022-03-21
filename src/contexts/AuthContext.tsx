import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebase, auth } from '../services/firebase';
import { database } from '../services/firebase'

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

	function handleSetUser(firebaseUser: any) {
		
		const { displayName, photoURL, uid } = firebaseUser;
		const firebaseUserObject = {
			id: uid,
			name: displayName,
			avatar: photoURL
		}

		if (!displayName || !photoURL) {
			throw new Error('Missing information from Google Account.');
		}

    database.ref(`users/${uid}`).on('value', user => {
      const dataUser = user.val()
			console.log(dataUser);

			if (!dataUser) {
				handleCreateUser(firebaseUserObject)
			}
    })

		setUser(firebaseUserObject)
	}

	async function handleCreateUser(user: User) {
		const userRef = database.ref('users')
		const firebaseUser = await userRef.child(user.id).set(user)

		return firebaseUser
	}

	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider()

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