import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Task from "../pages/Task";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import UseState from "../components/UseState";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/task" element={<Task />} />
          <Route path="/project" element={<Project />} />
          <Route path="/usestate" element={<UseState/>}/>
        </Route>

        <Route path="/login" element={<Login/>}/>


      </Routes>
    </>
  );
};

export default AppRoutes;
