import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Services showCondition={false} />
      <About showCondition={false} teamShow={false}/>
      <Footer />
    </div>
  );
}
