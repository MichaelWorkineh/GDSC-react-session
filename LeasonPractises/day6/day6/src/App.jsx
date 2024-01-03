import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Notfound from "./Notfound";
import UserProfile from "./UserProfile";

// Create the router instance here:
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/UserProfile/:ID" element={<UserProfile />} />
    <Route path="/*" element={<Notfound />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
