import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Often from './components/often/Often';
import Pizza from './components/pizza/Pizza';
import { PizzaProvider } from './context/PizzaContext';

function App() {
  return (
    <>
      <PizzaProvider>
        <Header />
        <Main />
        <Pizza />
        <Often />
        {/* можно будет еще добавить кнопку, которая будет переносить наверх страницы */}
      </PizzaProvider>
    </>
  );
}

export default App;
