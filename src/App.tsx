"use strict";
import { Header } from "./components/layout/header";
import Footer from "./components/layout/foorer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Meet from "./components/Meet";
import Startdirection from "./components/Start";
import Getdirection from "./components/Getdirection";
import Whatcustumer from "./components/Whatcustumer";
import Ready from "./components/Ready";

function App() {
  return (
    <>
      <div className="w-full relative min-h-full flex flex-col">
        <Header />
        <main className="flex-auto pt-[104px]">
          <Hero />
          <Features />
          <Meet />
          <Startdirection />
          <Getdirection />
          <Whatcustumer />
          <Ready />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
