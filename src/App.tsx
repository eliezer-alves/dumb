import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Create, SignIn } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-room' element={<Create />} />
        <Route path='/sign-in-room' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
