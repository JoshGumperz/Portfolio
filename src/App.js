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
import { animateScroll as scroll } from 'react-scroll'

// test if I can push from new Mac

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

  // bascially we want to automatically scroll to the right part of the page whenever the user navigates to a different part of the site, so we create this function, then pass it to each page component, and use the useEffect hook to call it when the component renders
  const scrollToSection = () => {
    scroll.scrollTo(400, {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: 50,
    })
  } 
  

  return (
    <Router className="App">
      <Navbar toggleSidebar={toggleSidebar} currentPage={currentPage} setPage={setPage} scrollToSection={scrollToSection}/>
      <SideBar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} setPage={setPage}/>
      <Slider/>
      <Switch>
        <Route path="/about">
          <About scrollToSection={scrollToSection}/>
        </Route>
        <Route path="/contact">
          <Contact scrollToSection={scrollToSection}/>
        </Route>
        <Route path="/mywork">
          <MyWork scrollToSection={scrollToSection}/>
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
