import Header from "../Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import FavMovie from "../FavList/FavMovie/FavMovie.jsx"
import Footer from "../Footer/Footer.jsx";
import "../FavList/FavList.css";
export default function FavList() {
  const [favMovie, setFavMovie] = useState([]);
  async function getFavMovie() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
    const data = await response.json();

    setFavMovie(data);
  }

  useEffect(() => {
    getFavMovie();
  }, []);

  return (
    <>
      <Header />
      <div id="content">
        {favMovie && favMovie.map((data) => {
          return (
            <FavMovie key={data.id} movie={data} getFavMovie={getFavMovie} />
          )
        })}
      </div>
      <Footer />
    </>
  )

}