import React, { useState } from "react";
import "./App.css";
import MainPage from './pages/MainPage/MainPage';


export default function App() {
  const users  = [
    { 
      one: "Житель Бишкека просит мэрию обратить внимание на состояние тротуаров на улице Ахунбаева — по ним невозможно ходить. Об этом он сообщил 24.kg. ",
    },
    <br></br>,
    {
      two: "«Тротуары полностью разбиты от проспекта Чингиза Айтматова до микрорайона «Джал». Ходить по ним невозможно. Каждый день возим детей в колясках, и это большое испытание. Когда мэрия наведет здесь порядок?» — спрашивает читатель.",
    }
  ]



  const [darkMode, setDarkMode] = useState(false);
  return (

    
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "white" : "grey" }}>On</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? "white" : "black" }}>Off</span>
      </div>
      <div>
          <MainPage users={users}/>
      </div>
    </div>
  );
}
