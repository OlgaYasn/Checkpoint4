import books from "../assets/images/main_books.jpg";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <img src={books} alt="book" className="mainimage_book" />
      </div>
      <p>je teste ma police</p>
    </div>
  );
}
