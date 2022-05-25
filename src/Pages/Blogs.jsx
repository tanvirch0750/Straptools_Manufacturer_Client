import React from "react";
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
                For better user experience optimized react application is must.
                Many ways we can improve our react application performance. In
                React when a parent component's state changes, the parent and
                its child components are re-rendered. So if we keep component
                state local it will reduce rerendering. We can also memorize
                react component so that it can prevent unnecessary rerendering.
                For that we can use various hooks in react like React.memo(),
                useCallback(), useMemo(). Lazy loading is another great option
                for optimizing react components. We can use lazy loading to
                delay rendering images in the DOM until they are about to
                display in the viewport.
              </p>
            </div>
            <div className="article">
              <h2>
                What are the different ways to manage a state in a React
                application?
              </h2>
              <p>
                In a react application, we can manage state in a variety of
                ways. The most important are global state, local state, server
                state, and URL state. The useState() hook is primarily used to
                modify local state. Reducer is another tool that can be used to
                modify the local state as well as the global state. We can use
                the context API to manage global state. It is not the best
                solution for the global state, but it is a way to avoid prop
                drilling. Third-party libraries such as redux, recoil, and
                others can be used for global state. React Query can be used as
                a server state. It offers caching functionality. Finally, we can
                use URL state with react router, which provides us with some
                state such as useHistory, useLocation, and so on.
              </p>
            </div>
            <div className="article">
              <h2>How does prototypical inheritance work?</h2>
              <p>
                Every javascript object has a prototype property which makess
                inheritance possible in javascript. The prototype property of an
                object is where we put methods and properties thet we want other
                object to inherit. The constructor prototype property is not the
                protype of the constructor itself, its the prototype of all
                instances that are created through it. When a certain method or
                property is called, the search starts in the object itself and
                if it cannot be found, the search moves to the objects
                prototype. This continues until the method is found in prototype
                chain.
              </p>
            </div>
            <div className="article">
              <h2>
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h2>
              <p>
                when we directly mutate the state and call setState() with an
                empty object the mutation will infect the previous state. As a
                result the component will not re-render. React compares the
                previous and updated states to determine whether the component
                needs to be re-rendered. Directly modifying the state will
                disrupt this process. As a result, the component will behave in
                an unexpected manner. In some cases, even though the state has
                been changed, no re-rendering occurs.
              </p>
            </div>
            <div className="article">
              <h2>
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </h2>
              <p>
                First create a state "const [searchName, setSearchName] =
                useState("")" to initiate the value of search field. After this
                we take the name value from the search field and set it in state
                with setSearchName. Then fileter the array with filter method
                using that searchName.
              </p>
            </div>
            <div className="article">
              <h2>What is a unit test? Why should write unit tests?</h2>
              <p>
                Unit testing is a type of application or software testing where
                individual units or components of a software or application are
                tested. Individual components of a software or application are
                tested during unit testing. The main reason for this is to
                ensure that all of the individual parts are functioning
                properly. A unit is the smallest possible software component
                that can be tested. It typically has a few inputs and a single
                output.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
