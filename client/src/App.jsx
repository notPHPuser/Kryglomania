import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Pizza from './components/pizza/Pizza';
import { PizzaProvider } from './components/pizza/PizzaContext';

function App() {
  return (
    <>
      <PizzaProvider>
        <Header />
        <Main />
        <Pizza />
      </PizzaProvider>
    </>
  );
}

export default App;
