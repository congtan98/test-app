import Popup from "./components/Popup";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-[#141415]">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
