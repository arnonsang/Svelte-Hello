<script>
// @ts-nocheck
  import { Route, Router } from "svelte-routing";

  import Hero from "./pages/Hero.svelte";
  import Hero2 from "./pages/Hero2.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Contact from "./pages/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./pages/About.svelte";
  import Data from "./pages/Data.svelte";
 
  

  let basepath = "/";
  let path = [
    {path:"/", text:"Home"},
    {path:"/about", text:"About"},
    {path:"/contact", text:"Contact"},
    {path:"/data", text:"Data"},
  ]
</script>

<Router {basepath}>
    <Navbar path={path}/>

    <!-- Staticpath -->
    <Route path="/">
      <Hero/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/data">
      <Data/>
    </Route>

    <!-- Params path -->
    <Route path="/:sometext" let:params>
      <Hero2 text="{params.sometext}"/>
    </Route>

    <Footer/>
</Router>