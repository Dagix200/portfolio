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
  window.addEventListener('scroll', function() {
    var element1 = document.querySelector('.AboutP');
    var element2 = document.querySelector('.AboutIMG');
    var element3 = document.querySelector('.LangMainContent');
    var element4 = document.querySelector('.SoftMainContent');

    var elements = [element1, element2, element3, element4]
    var className = ['animateAboutMainP', 'animateAboutMainIMG', 'animateLangMainContent', 'animateSoftMainContent']
  
    elements.forEach((element, index) => {
      var position = element.getBoundingClientRect();
      if(position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add(className[index]);
      }
    })
  });
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
