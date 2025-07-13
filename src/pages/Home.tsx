import { Header } from "../components/layout/header";
import Gallery from "../Gallery";
function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <main className="py-40">
        <section id="home"></section>
        <div className="container mx-auto px-4">
          <Gallery />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quos
            ratione officiis autem vero consectetur labore animi dolore odio,
            possimus nesciunt dolores libero praesentium id ex debitis, quae
            consequatur doloribus.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
