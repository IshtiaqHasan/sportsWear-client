import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Home/Banner/Banner";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="my-components">
      <Header></Header>
      <Banner></Banner>
      <Shop></Shop>
    </div>
  );
}

export default App;
