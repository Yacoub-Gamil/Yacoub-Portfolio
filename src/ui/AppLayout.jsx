import Home from "../pages/Home";
import Header from "../components/Header";
import About from "../pages/About";
import Projects from "../pages/Projects";

function AppLayout() {
  return (
    <div className="container mx-auto">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default AppLayout;
