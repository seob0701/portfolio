import "./App.css";
import { Nav, Home, About, Skill, Project, Contact } from "./components/index";

window.onload = () => {};

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
