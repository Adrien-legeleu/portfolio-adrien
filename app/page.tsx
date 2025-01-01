import { About } from "./component/About/About";
import Approach from "./component/Approach/Approach";
import Contact from "./component/Contact/Contact";
import Landing from "./component/Landing/Landing";

export default function Home() {
  return (
    <div className="lg:px-20 xs:px-10 px-5 overflow-x-hidden">
      <Landing />
      <About />
      <Approach />
      <Contact />
    </div>
  );
}
