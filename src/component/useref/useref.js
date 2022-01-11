import { useRef } from "react";
import {About,Header,Technology,Portfolio,Sample,Node} from "./Portfolio";
import './App.css'


function App() {
  const pageRefs = useRef({});

  return (
    <div className="app">
      <Header pageRefs={pageRefs} />
      <About pageRefs={pageRefs} />
      <Technology pageRefs={pageRefs} />
      <Portfolio pageRefs={pageRefs} />
      <Sample pageRefs={pageRefs} />
      <Node pageRefs={pageRefs} />


      
    </div>
  );
};
export default App