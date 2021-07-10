import "./App.scss";
import Brief from "./components/Brief/Brief";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import ThingsWeDo from "./components/ThingsWeDo/ThingsWeDo";

function App() {
  return (
    <div>
      <Header />
      <Brief />
      <Stats />
      <ThingsWeDo />
    </div>
  );
}

export default App;
