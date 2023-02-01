import { NavLink } from "react-router-dom";
import books from "../assets/images/main_books.jpg";
import reading from "../assets/images/main_books2.jpg";
import pile from "../assets/images/main_books3.jpg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <div className="mainpage_images">
        <img src={books} alt="book" className="mainimage_book" />
        <div className="mainpage_side_images">
          <img src={reading} alt="book" className="mainimage_reading" />
          <img src={pile} alt="book" className="mainimage_pile" />
        </div>
        <div className="mainpage_text_block">
          <h2 className="mainpage_title"> Hey! Hey! </h2>
          <div className="mainpage_text">
            <p>
              {" "}
              Are you searching for something to read ? You are at the right
              place !{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quisquam aliquid facilis dolor. Optio libero quam saepe asperiores
              dolorum eligendi, reiciendis laborum ducimus obcaecati, est
              debitis, fugiat error. Odio, recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quisquam aliquid facilis dolor. Optio libero quam saepe asperiores
              dolorum eligendi, reiciendis laborum ducimus obcaecati, est
              debitis, fugiat error. Odio, recusandae.
            </p>
            <NavLink to="/findyourbook">
              <button type="button" className="main_page_button">
                Find my book
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
