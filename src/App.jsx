import { useState } from "react";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Button } from "@/components/ui/button";
// import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <div className={"flex justify-around"}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1 className="font-mono h-8 text-green-600">Vite + React</h1> */}
      <div className="card flex justify-center items-center my-16">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        {/* <p className={"py-4"}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
