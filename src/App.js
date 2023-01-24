import "./App.css";
import Editor from "./components/editor/editor";
import SideBar from "./components/sideBar/sideBar";

function App() {
  return (
    <div className="App">
      <div className="Editor">
        <Editor />
      </div>
      <div className="Sidebar">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
