import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Create, SignIn } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in-room' element={<SignIn />} />
        <Route path='/create-room' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
