import "./App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
/*function App() {
  const movienumber = 1;

  return (
    <>
      {movienumber === 1 ? (//condtional statement for if..else
        <MovieCard movie={{ title: "Steven Universe", release_date: "2015" }} />//display movie card
      ) : (
        <MovieCard movie={{ title: "Adventure Time", release_date: "2015" }} />
      )}
    </>
  );
}*/
