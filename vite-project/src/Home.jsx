import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Booking from './components/Booking';
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar prop="Home" img="src/assets/img/Unveiling-the-Life-of-a-Professional-Chef.webp"/>
      <Services showCondition={false} />
      <About showCondition={false} teamShow={false} />
      <Menu showCondition={false}/>
      <Booking showCondition={false}/>
      <Team showCondition={false} subTeam={false}/>
      <Testimonial showCondition={false}/>
      <Footer />
    </div>
  );
}
