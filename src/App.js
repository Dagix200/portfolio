import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Main from './Main';
import Languages from './Languages';
import Software from './Software';
import Contacts from './Contacts';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <About />
      <Languages />
      <Software />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
