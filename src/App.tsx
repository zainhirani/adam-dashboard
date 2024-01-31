import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
        <h3 className="text-[36px] font-bold">Sidebar</h3>
        </div>
      </aside>
      <div className="py-6 px-6 sm:py-11 sm:px-14 sm:ml-64">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
