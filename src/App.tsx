import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Services />
      <WorkProcess />
      <WhyUs />
    </>
  );
}

export default App;
