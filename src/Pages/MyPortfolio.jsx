import React from "react";
import larry from "../assets/images/portfolio-image/larry-brandon.png";
import si from "../assets/images/portfolio-image/sports-inventory.png";
import todo from "../assets/images/portfolio-image/todo-app.png";
import Header from "../components/Header";
import "../styles/MyPortfolio.css";

const MyPortfolio = () => {
  return (
    <>
      <Header />
      <section className="my-portfolio">
        <div className="container">
          <div className="my-portfolio-inner">
            <div className="portfolio-heading">
              <h2>Mohammad Tanvir Chowdhury</h2>
              <h3>Frontend Developer</h3>
            </div>
            <div className="portfolio-address">
              <div className="address-basic">
                <p>
                  <span>Address:</span>Chandpur, Bangladesh
                </p>
                <p>
                  <span>Phone:</span>+8801302047933
                </p>
                <p>
                  <span>Email:</span>tanvir.chowdhury.7575.gmail.com
                </p>
              </div>
              <div className="address-social">
                <a href="https://github.com/tanvirch0750">Github</a>{" "}
                <span>|</span>{" "}
                <a href="https://linkedin.com/in/tanvirdev">Linkedin</a>{" "}
                <span>|</span> <a href="https://twitter.com/mtc0750">Twitter</a>{" "}
                <span>|</span>{" "}
                <a href="https://www.facebook.com/tanvirchowdhury.shahib">
                  Facebook
                </a>
              </div>
            </div>
            <div className="career-objective">
              <h2>My Career Objective</h2>
              <p>
                With a strong technical skill-set and attention to detail, I
                want to work as a front-end web developer where I could create
                digital magic and elevate user experience to the next level. A
                unique characteristic and critical thinker with an instinct for
                design who plans to use these qualities in a front-end developer
                role that allows me to further develop my skills.
              </p>
            </div>
            <div className="skills">
              <h2>My Skills</h2>
              <div className="skills-inner">
                <div className="expertise">
                  <p>
                    <span>Expertise:</span>
                    JavaScript, ES6, React.js, Tailwind CSS, Bootstrap5, HTML5,
                    CSS3, SCSS, Responsive Design, React Router.
                  </p>
                </div>
                <div className="comfortable">
                  <p>
                    <span>Comfortable:</span>
                    React Bootstrap, Express.js, MongoDB, Node.js, React Spring.
                  </p>
                </div>
                <div className="familiar">
                  <p>
                    <span>Familiar:</span>
                    Rest API, Context API, Framer motion, Green Sock, Redux,
                    React Query.
                  </p>
                </div>
                <div className="tools">
                  <p>
                    <span>Tools:</span>
                    VS code, Git, Chrome dev tool, Firebase, Netlify, Heroku,
                    Postman, MongoDBCompass.
                  </p>
                </div>
                <div className="summary">
                  <h3>Skills Summary</h3>
                  <ul>
                    <li>
                      Unique ability to improvise, grasp new skills, and
                      troubleshoot problems.
                    </li>
                    <li>Communicating with the creative team and clients.</li>
                    <li>
                      Adopting ideas and bringing them to life through
                      technology
                    </li>
                    <li>Well-organized with an ability to prioritize tasks.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="projects">
              <h2>My Projects</h2>
              <div className="project-inner">
                <div className="project">
                  <div className="project-image">
                    <img src={si} alt="sports inventory" />
                  </div>
                  <div className="project-description">
                    <h3>Name: Sports Zone (MERN) - Inventory management</h3>
                    <div className="project-links">
                      <a href="https://sports-zone-inventory.netlify.app/">
                        Live Website
                      </a>
                      <a href="https://github.com/tanvirch0750/Sports-Zone-Inventory---Client">
                        Github (Client)
                      </a>
                      <a href="https://github.com/tanvirch0750/Sports-Zone-Inventory-Server">
                        Github (Server)
                      </a>
                    </div>
                    <p className="project-description">
                      It is an inventory management system for a sports type of
                      equipment company. The outlet manager(user) can add items,
                      deliver, and stock items. They can select their outlet and
                      different warehouse for their product. Users have to be
                      logged in if they want to add or manage inventory items.
                    </p>
                    <p className="technologies">
                      <span>Technologies:</span>React.js, Firebase
                      Authentication, React Router, React Form Hook, Custom CSS,
                      Node Js, MongoDB, JSON Web Token.
                    </p>
                  </div>
                </div>
                <div className="project">
                  <div className="project-image">
                    <img src={todo} alt="Todo - app" />
                  </div>
                  <div className="project-description">
                    <h3>Todo (MERN) - Task tracking web app</h3>
                    <div className="project-links">
                      <a href="https://todo-app-83281.web.app/">Live Website</a>
                      <a href="https://github.com/tanvirch0750/Todo-App">
                        Github (Client)
                      </a>
                      <a href="https://github.com/tanvirch0750/Todo-App-Server">
                        Github (Server)
                      </a>
                    </div>
                    <p className="project-description">
                      Users have to log in first to add tasks. Users can mark a
                      task when the task is completed. Users can delete the
                      task. Users can see only their tasks because the app is
                      protected with JWT.
                    </p>
                    <p className="technologies">
                      <span>Technologies:</span>React.js, Firebase
                      Authentication, React Router, React Form Hook, MongoDB,
                      Express, Node Js, Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="project">
                  <div className="project-image">
                    <img src={larry} alt="larry brandon" />
                  </div>
                  <div className="project-description">
                    <h3>Larry Brandon - Service provider </h3>
                    <div className="project-links">
                      <a href="https://larry-brandon.web.app/">Live Website</a>
                      <a href="https://github.com/tanvirch0750/Independent-Service-Provider-Larry-Brandon">
                        Github
                      </a>
                    </div>
                    <p className="project-description">
                      Larry Brandon is an accountant. This is her
                      accountant-related service selling website. Users sign up
                      and log in to this website using google, email, and
                      password. Users can book services.
                    </p>
                    <p className="technologies">
                      <span>Technologies:</span>React.js, Firebase
                      Authentication, React Router, React Form Hook, Custom CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <h2>Education</h2>
              <p>
                B.B.A.(Hons.) department of Management (National University,
                Bangladesh). (2016 - 2020)
              </p>
            </div>
            <div className="languages">
              <h2>Languages</h2>
              <p>Bangla (Native), English (Communicative).</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPortfolio;
