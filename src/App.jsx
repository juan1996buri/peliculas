import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Movies from "./components/Movies";
import MovieInformation from "./components/MovieInformation";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/:id" element={<MovieInformation />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
