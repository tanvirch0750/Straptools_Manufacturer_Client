import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Blogs.css";

const Blogs = () => {
  return (
    <>
      <Header />
      <section className="blogs">
        <div className="container">
          <div className="section-heading">
            <h2>My Blogs</h2>
          </div>

          <div className="articles">
            <div className="article">
              <h2>
                How will you improve the performance of a React Application?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                qui delectus hic, nemo molestias porro autem? Laboriosam minima
                commodi optio quaerat beatae, itaque ipsum rerum ratione.
                Incidunt voluptates ipsam odio sed odit optio quis placeat qui
                distinctio, nobis, tenetur facilis. Amet doloremque velit
                sapiente maiores impedit totam laudantium et reprehenderit.
              </p>
            </div>
            <div className="article">
              <h2>
                What are the different ways to manage a state in a React
                application?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                qui delectus hic, nemo molestias porro autem? Laboriosam minima
                commodi optio quaerat beatae, itaque ipsum rerum ratione.
                Incidunt voluptates ipsam odio sed odit optio quis placeat qui
                distinctio, nobis, tenetur facilis. Amet doloremque velit
                sapiente maiores impedit totam laudantium et reprehenderit.
              </p>
            </div>
            <div className="article">
              <h2>How does prototypical inheritance work?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                qui delectus hic, nemo molestias porro autem? Laboriosam minima
                commodi optio quaerat beatae, itaque ipsum rerum ratione.
                Incidunt voluptates ipsam odio sed odit optio quis placeat qui
                distinctio, nobis, tenetur facilis. Amet doloremque velit
                sapiente maiores impedit totam laudantium et reprehenderit.
              </p>
            </div>
            <div className="article">
              <h2>
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                qui delectus hic, nemo molestias porro autem? Laboriosam minima
                commodi optio quaerat beatae, itaque ipsum rerum ratione.
                Incidunt voluptates ipsam odio sed odit optio quis placeat qui
                distinctio, nobis, tenetur facilis. Amet doloremque velit
                sapiente maiores impedit totam laudantium et reprehenderit.
              </p>
            </div>
            <div className="article">
              <h2>
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                qui delectus hic, nemo molestias porro autem? Laboriosam minima
                commodi optio quaerat beatae, itaque ipsum rerum ratione.
                Incidunt voluptates ipsam odio sed odit optio quis placeat qui
                distinctio, nobis, tenetur facilis. Amet doloremque velit
                sapiente maiores impedit totam laudantium et reprehenderit.
              </p>
            </div>
            <div className="article">
              <h2>What is a unit test? Why should write unit tests?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                qui delectus hic, nemo molestias porro autem? Laboriosam minima
                commodi optio quaerat beatae, itaque ipsum rerum ratione.
                Incidunt voluptates ipsam odio sed odit optio quis placeat qui
                distinctio, nobis, tenetur facilis. Amet doloremque velit
                sapiente maiores impedit totam laudantium et reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
