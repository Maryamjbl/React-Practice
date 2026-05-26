// import CourseBS from "./CourseBS";
// import CourseList from "./CourseList";
// import Counter from "./Counter";
// import StudentForm from "./StudentForm";
// import CourseCard from "./CourseCard";
// import ProductObject from "./ProductObject";
// import ProductList from "./ProductList";
// import CourseObject from "./CourseObject";
// import UserInfo from "./UserInfo";
// import EmployeeDirectory from "./EmployeeDirectory";
// import ProductForm from "./ProductForm";
// import ProductCard from "./ProductCard";
// import ProductCatalogue from "./ProductCatalogue";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CourseCard from "./CourseCard";

function App() {
  return (
    <Router>
      <div className="App container">
        {/* <h1 className="m-3 text-center text-primary mb-5">Employees App</h1> */}

        {/* <CourseBS></CourseBS> */}
        {/* <CourseList></CourseList> */}
        {/* <CourseObject></CourseObject>
        <UserInfo></UserInfo> */}
        {/* <ProductList></ProductList> */}
        {/* <ProductObject></ProductObject> */}
        {/* <CourseCard></CourseCard> */}
        {/* <Counter></Counter> */}
        {/* <StudentForm></StudentForm> */}
        {/* <ProductCard
          productName="Wireless Headphones"
          price={99.99}
          features={["Full-size drivers", "Bluetooth connectivity", "Noise cancellation"]}
        />
        <ProductCard
          productName="Smartwatch"
          price={199.99}
          features={["Heart rate monitoring", "Sleep tracking", "Water-resistant"]}
        /> */}
        {/* <ProductForm></ProductForm> */}
        {/* <EmployeeDirectory></EmployeeDirectory> */}
        {/* <ProductCatalogue></ProductCatalogue> */}

        <nav className="navbar navbar-expand-lg bg-body-teritary bg-dark navbar-dark mb-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<CourseCard />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-dark text-light text-center p-3 mt-5">
          &copy; 2026 React. All rights reserved.
        </footer>
    </Router>
  );
}

export default App;
