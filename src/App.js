import "./App.scss";
import Brief from "./components/Brief/Brief";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
import ThingsToDo from "./components/ThingsToDo/ThingsToDo";

function App() {
  return (
    <div>
      <Header />
      <Brief />
      <Stats />
      <ThingsToDo />
      <Reviews />
    </div>
  );
}

export default App;
