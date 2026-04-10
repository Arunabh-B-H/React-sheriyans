import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="parent">
      <Navbar></Navbar>
      <Card name="Ram" />
      <Card name="Shyam" />
    </div>
  );
}
export default App;
