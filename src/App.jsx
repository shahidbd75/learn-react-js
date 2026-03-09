import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import axios from "axios";

const PriceOptionsPromise = axios.get("price-data.json");
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-spinner text-info"></span>}
        >
          <PricingOptions
            PriceOptionsPromise={PriceOptionsPromise}
          ></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
