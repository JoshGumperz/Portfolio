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

function App() {
  // state variables used to decide whether or not to show the sidebar (should only show when on mobile and user taps the hamburger menu), and to detect the page the user is currently on.
  const [hideSidebar, setHideSidebar] = useState(true)
  // Use window.location.pathname to get the initial value for currentPage.
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  // toggle sidebar on and off when user is on mobile and taps the hamburger menu
  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar)
  }

  // bascially we want to automatically scroll to the right part of the page whenever the user navigates to a different part of the site, so we create this function, then pass it to each page component, and use the useEffect hook to call it when the component renders
  const scrollToSectionAndUpdateCurrentPage = () => {
    scroll.scrollTo(400, {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: 50,
    })
    // since this function gets called in the useEffect for each different page, we can also use it to update the current page
    setCurrentPage(window.location.pathname)
  } 
  

  return (
    <Router className="App">
      <Navbar toggleSidebar={toggleSidebar} currentPage={currentPage}/>
      <SideBar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar}/>
      <Slider/>
      <Switch>
        <Route path="/about">
          <About scrollToSectionAndUpdateCurrentPage={scrollToSectionAndUpdateCurrentPage}/>
        </Route>
        <Route path="/contact">
          <Contact scrollToSectionAndUpdateCurrentPage={scrollToSectionAndUpdateCurrentPage}/>
        </Route>
        <Route path="/mywork">
          <MyWork scrollToSectionAndUpdateCurrentPage={scrollToSectionAndUpdateCurrentPage}/>
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
