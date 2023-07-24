import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import GlobalStyle from './styles/globalStyles';
import AddAnimalPage from './pages/AddAnimalPage';
import AddBirthPage from './pages/AddBirthPage';
import AddDeathPage from './pages/AddDeathPage';
import AddSalePage from './pages/AddSalePage';
import PastosPage from './pages/PastosPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/addAnimal' element={<AddAnimalPage />} />
          <Route path='/addBirth' element={<AddBirthPage />} />
          <Route path='/addDeath' element={<AddDeathPage />} />
          <Route path='/addSale' element={<AddSalePage />} />
          <Route path='/pastos' element={<PastosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
