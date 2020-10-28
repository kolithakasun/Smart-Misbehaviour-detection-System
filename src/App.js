import './App.css';
import NavBar from './components/navBar/navBar';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}

      <NavBar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
