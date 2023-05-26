import "./App.scss";
import Brief from "./components/Brief/Brief";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import LatestCreations from "./components/LatestCreations/LatestCreations";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
import ThingsToDo from "./components/ThingsToDo/ThingsToDo";

function App() {
  return (
    <div>
      <Hero />
      <Brief />
      <Stats />
      <ThingsToDo />
      <Reviews />
      <LatestCreations />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
