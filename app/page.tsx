import { About } from "./component/About/About";
import Approach from "./component/Approach/Approach";
import Landing from "./component/Landing/Landing";
import Project from "./component/Project/Project";

export default function Home() {
  return (
    <div className="px-20">
      <Landing />
      <About />
      <Project />
      <Approach />
    </div>
  );
}
