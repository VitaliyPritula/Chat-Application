// import { Header } from "../components/layout/header";
import FlagScene from "../FlagScene";

export default function Flag() {
  return (
    <div className="relative w-full">
      {/* <Header /> */}
      <main className="py-40 w-full">
          <h1 className="text-4xl text-white w-full mx-a text-center font-bold mb-8">
            З днем Конституції України
          </h1>
          <div className="w-full h-160">
            <FlagScene />
          </div>
      </main>
    </div>
  );
}
