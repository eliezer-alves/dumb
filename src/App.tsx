import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { SignIn } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in-room' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
