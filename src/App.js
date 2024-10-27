import './App.css';
import {RouterProvider} from "react-router-dom";
import routing from "./routing/routing";

function App() {
  return (
    <div className="App">
        <RouterProvider router={routing}/>
    </div>
  );
}

export default App;
