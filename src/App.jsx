import "./App.css";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import TestComponent from "./components/TestComponent";
import Home from "./components/Home";

function App() {
  const [openSide, setOpenSide] = useState(false);
  const [changePage, setChangePage] = useState("");
  return (
    <div className="App">
      <div className="side-container">
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setOpenSide(!openSide)}
          style={openSide ? { width: "200px" } : null}
        />
        {openSide ? (
          <div className="icon-container">
            <HiOutlineHome
              className="icon-side"
              onClick={() => setChangePage("")}
            />
            <BsBox className="icon-side" onClick={() => setChangePage("test")} />
            <BsPeopleFill
              className="icon-side"
              onClick={() => setChangePage("abuelos")}
            />
          </div>
        ) : null}
      </div>
      {changePage === "" ? (
        <Home openSide={openSide}/>
      ) : changePage === "abuelos" ? (
        <SearchComponent openSide={openSide}/>
      ) : changePage === "test" ? <TestComponent openSide={openSide}/> : null}
    </div>
  );
}

export default App;
