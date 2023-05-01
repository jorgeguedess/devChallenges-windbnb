import Header from "./components/Header";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";

import "./styles/scss/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hotels />
      <Footer />
    </div>
  );
}

export default App;
