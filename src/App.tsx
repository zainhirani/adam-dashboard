import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="py-6 px-6 sm:py-11 sm:px-14 sm:ml-64">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
