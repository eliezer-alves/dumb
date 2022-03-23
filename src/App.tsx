import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ModalContextProvider } from "./contexts/ModalsContext";
import { Home } from './pages/Home';
import { Create, Room, SignIn } from './pages/Room';
import { TemplateDocs } from "./pages/TemplateDocs";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ModalContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rooms/new' element={<Create />} />
            <Route path='/rooms/sign-in' element={<SignIn />} />
            <Route path='/rooms/:id' element={<Room />} />
            <Route path='/docs' element={<TemplateDocs />} />
          </Routes>
        </ModalContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
