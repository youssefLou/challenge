import Footer from "./components/Footer";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/privacy":
      component = <Privacy />;

      break;
    case "/terms":
      component = <Terms />;

      break;
  }
  return (
    <>
      <Footer />
    </>
  );
}

export default App;
