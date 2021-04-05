import "./styles/App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Cover from "./components/cover";
import Landing from "./components/landing";
import General from "./components/general";
import Navbar from "./components/navbar";
import Curated from "./components/curated";
import Randomize from "./components/randomize";
import MembersPlace from "./components/membersPlace";
import GenerateSound from "./components/generateSound";
import SoundOutput from "./components/soundOutput";
import SoundToggle from "./components/soundToggle";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Impressum from "./components/impressum";
// CURATED
import FiveMin from "./components/curated-five-min";
import Relax from "./components/curated-relax";
import Sleep from "./components/curated-sleep";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Cover} />
          <Route path="/home" exact component={Landing} />
          <Route path="/curated" exact component={Curated} />
          <Route path="/generator" exact component={General} />
          <Route path="/randomize" exact component={Randomize} />
          <Route path="/members-place" exact component={MembersPlace} />
          <Route path="/generate-sound" exact component={GenerateSound} />
          <Route path="/your-sound" exact component={SoundOutput} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/impressum" exact component={Impressum} />
          {/* CURATED */}
          <Route path="/five-min-pick-me-up" exact component={FiveMin} />
          <Route path="/relax" exact component={Relax} />
          <Route path="/i-want-to-sleep" exact component={Sleep} />
        </Switch>
      </Router>
      {/* <SoundToggle /> */}
    </>
  );
}

export default App;
