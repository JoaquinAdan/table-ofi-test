import "./App.css";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
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
            <AiOutlineHome
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
        <Home />
      ) : changePage === "abuelos" ? (
        <SearchComponent />
      ) : changePage === "test" ? <TestComponent /> : null}
    </div>
  );
}

export default App;
