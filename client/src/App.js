import logo from'./logo (2).png'
import hmc from'./hmc4 (2).png'
import './App.css';
import Home from "./Components/Home.js";
import Join from "./Components/Join.js";
import { BrowserRouter, Routes, Route, Router, Outlet,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
      <img align="left"src={logo} className="App-logo" alt="logo" />
      <img align="right"src={hmc} className="hmc" alt="" />
      </div>
      

        
      
      <div class="para">
        <p>“The chapter you are learning today is going to <br></br>
        save someone’s life tomorrow. Pay attention.”</p>
      </div>
      <div>
        <p4>
          Use "Create" to create a new room. Use "Join" to join an existing room.
        </p4>
      </div>
        
        <div class="tot">
          
          
        {/* <div class="resume">
            <a id= "create"href="resume.pdf" >Create</a>
            <a id= "join"href="resume.pdf" >Join Room</a>
        </div> */}
        </div>
        
        <>
      
    </>
		
      
    </div>
    
  );
}

export default App;
