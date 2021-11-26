import './App.css';
import { Header } from './components/main/header/Header';
import { DinamicMenu } from './components/main/content/DinamicMenu';
import { DinamicContent } from './components/main/content/DinamicContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <DinamicMenu />
        <DinamicContent />
        <div className='Chat'>Чат</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
