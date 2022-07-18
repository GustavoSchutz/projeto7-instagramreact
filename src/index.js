import ReactDOM from "react-dom";

import Header from "./components/Header";

import Container from "./components/Container.js";

import Bottombar from "./components/Bottombar.js";





function App() {
    return (
      <div>
        <Header />
        <Container />
        <Bottombar />
      </div>
    );
  }

ReactDOM.render(<App />, document.querySelector(".root"));
