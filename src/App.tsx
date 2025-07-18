"use strict";
import { Header } from "./components/layout/header";
import Hero from "./components/Hero";
import Features from "./components/Features";
function App() {
  return (
    <>
      <div className="w-full relative min-h-full flex flex-col">
        <Header />
        <main className="flex-auto pt-[104px]">
          <Hero />
          <Features/>
        </main>
      </div>
    </>
  );
}

export default App;
