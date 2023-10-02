import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Main from "../pages/Main";
import Test from "../pages/test";


function Home() {
    return (
        <React.Fragment>
            <Header />
              <Link to="/test"> Click Here</Link>
              <Routes>
                    <Route  path="/" element={<Main />} />
                    <Route path="/test" element={<Test />} />
              </Routes>
        </React.Fragment >
    )
}

export default Home;