import Navbar from "./Components/Navbar";
import "./App.css";
import HeroSlider from "./Components/HeroSlider";
import StickyDiv from "./Components/StickyDiv";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <div className="relative h-screen w-full">
        <h1 className="text-[85px] tracking-wider text-white absolute top-[25%] left-[35%] -translate-x-1/2 -translate-y-1/2 text-red">
          FRANCHISE
        </h1>
        <h1 className="text-[80px] tracking-wider text-white absolute top-[37%] left-[60%] -translate-x-1/2 -translate-y-1/2 text-red">
          PARTNERSHIP
        </h1>
        <h1 className="text-[80px] tracking-wider text-white absolute top-[49%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-red">
          FOCUS
        </h1>
        <p className="text-[20px] tracking-wide w-[20%] text-white absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-red">
          Kuber Treats guides entrepreneurs to validated opportunities, building
          local success on a foundation of national strength.
        </p>
      </div>
      {/* <CompanySlider/> */}
      <StickyDiv />
    </>
  );
}

export default App;
