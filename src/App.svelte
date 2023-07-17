<script>
// @ts-nocheck
  import { Route, Router } from "svelte-routing";


  import Hero from "./pages/Hero.svelte";
  import Hero2 from "./pages/Hero2.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import About from "./pages/About.svelte";
  let basepath = "/";
  let path = [
    {path:"/", text:"Home"},
    {path:"/about", text:"About"},
    {path:"/contact", text:"Contact"},
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

    <!-- Params path -->
    <Route path="/:sometext" let:params>
      <Hero2 text="{params.sometext}"/>
    </Route>

    <Footer/>
</Router>
