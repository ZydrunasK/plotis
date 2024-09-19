import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { ContextWrapper } from './context/GlobalContext';

export function App() {

  return (
    <>
    <ContextWrapper>
      <Header />
      <Main />
    </ContextWrapper>
    </>
  )
}

