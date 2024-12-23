import { About } from "./component/About/About";
import Landing from "./component/Landing/Landing";
import Project from "./component/project/Project";

export default function Home() {
  return (
    <div className="px-20">
      <Landing />
      <About />
      <Project />
    </div>
  );
}
