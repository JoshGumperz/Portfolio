import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';
import SideBar from './components/Sidebar';
import Slider from './components/Slider';


function App() {
  // state variables used to decide whether or not to show the sidebar (should only show when on mobile and user taps the hamburger menu), and to detect the page the user is currently on.
  const [hideSidebar, setHideSidebar] = useState(true)
  // use /about by default for current page, cause the about page is the first page you see when you load up the project
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  // set currentPage to be whatever page the user is currently on
  const setPage = (path) => {
    setCurrentPage(path)
  }

  // toggle sidebar on and off when user is on mobile and taps the hamburger menu
  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar)
  }

  return (
    <Router className="App">
      <Navbar toggleSidebar={toggleSidebar} currentPage={currentPage} setPage={setPage}/>
      <SideBar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar}/>
      <Slider/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/mywork">
          <MyWork/>
        </Route>
        <Route path="/">
          <Redirect to="/about"/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
