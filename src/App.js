import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/project';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar/>

        <Container customClass="minHeight">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newProject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
