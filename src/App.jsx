import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Home />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
