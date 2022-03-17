import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Create, Room, SignIn } from './pages/Room';
import { TemplateDocs } from "./pages/TemplateDocs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-room' element={<Create />} />
        <Route path='/sign-in-room' element={<SignIn />} />
        <Route path='/room' element={<Room />} />
        <Route path='/docs' element={<TemplateDocs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
