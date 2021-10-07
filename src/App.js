import React, {useState,useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./login/login";


function App() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };


  useEffect(()=> {
    const hideMenu = () => {
      if (window.innerWidth > 700 && click) {
        setClick(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });


  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown click={click} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/login' exact component={Login} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
