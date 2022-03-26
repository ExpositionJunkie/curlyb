import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Home } from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Egg from "./Components/Reusable/Egg/Egg";
import APIPractice from "./Components/APIPractice/APIPractice";
import NASAPower from "./Components/APIPractice/InnerPages/NASA/NASAPower";
import DungeonsAndDragons from "./Components/APIPractice/InnerPages/DungeonsAndDragons/DungeonsAndDragons";
import ISSLocator from "./Components/APIPractice/InnerPages/ISSLocator/ISSLocator";
import IPAddress from "./Components/APIPractice/InnerPages/IPAddress/IPAddress";
import NameGuess from "./Components/APIPractice/InnerPages/NameGuess/NameGuess";
import Blog from "./Components/Blog/Blogs";
import BlogEntryStandalone from "./Components/Blog/BlogEntryStandalone";
import BlogList from "./Components/Blog/BlogList";
import CSP from "./Components/CSP/CSP";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Cookie from "./Components/Reusable/Cookie/Cookie";

//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {ActionCreators} from "./Redux/reduxIndex";
//https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/#:~:text=export%20default%20App%3B,ReactJS%20is%20connected%20with%20NodeJS
//pause in devtools before it can load the overlay to avoid the sign in bs.

//https://egghead.io/lessons/react-replacing-mapdispatchtoprops-with-the-usedispatch-hook
//redux to hooks

function AppComponent() {
  const dispatch = useDispatch();
  //dispatches for blogs
  dispatch({type: "fetchBlogs"})
  const blogs = useSelector((state) => state.blogs)

  const {fetchBlogs} = bindActionCreators(ActionCreators, dispatch)

  useEffect(() => {
    fetchBlogs()
    console.log("useEffect log", blogs);
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<p>...Loading</p>}>
        <header className="App-header">
          <Navbar />
          
          <div className="body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="apipractice" element={<APIPractice />} />
              <Route path="blog/*" element={<Blog />}>
                <Route index element={<BlogList />} />
                <Route path=":blogId" element={<BlogEntryStandalone />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="nameguesser" element={<NameGuess />} />
              <Route path="nasapower" element={<NASAPower />} />
              <Route path="isslocator" element={<ISSLocator />} />
              <Route path="dnd" element={<DungeonsAndDragons />} />
              <Route path="ip" element={<IPAddress />} />
              <Route path="signup" element={<Signup />} />
              <Route path="egg" element={<Egg />} />
              <Route path="csp" element={<CSP />} />
            </Routes>
            <Footer />
            <Cookie />
          </div>
        </header>
      </Suspense>
    </div>
  );
}

export const App = connect(null,null)(AppComponent);
