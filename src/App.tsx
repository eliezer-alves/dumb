import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Home } from './pages/Home';
import { Create, Room, SignIn } from './pages/Room';
import { TemplateDocs } from "./pages/TemplateDocs";

function App() {
  return (
    <BrowserRouter>      
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<Create />} />
          <Route path='/sign-in-room' element={<SignIn />} />
          <Route path='/room' element={<Room />} />
          <Route path='/docs' element={<TemplateDocs />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
