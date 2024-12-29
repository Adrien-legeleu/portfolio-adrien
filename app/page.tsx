import { About } from "./component/About/About";
import Approach from "./component/Approach/Approach";
import Contact from "./component/Contact/Contact";
import Landing from "./component/Landing/Landing";
import Project from "./component/Project/Project";

export default function Home() {
  return (
    <div className="px-20 overflow-x-hidden">
      <Landing />
      <About />
      <Project />
      <Approach />
      <Contact />
    </div>
  );
}
