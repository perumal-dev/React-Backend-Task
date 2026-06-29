import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Task from "../pages/Task";
import Layout from "../components/Layout";

import UseState from "../components/UseState";
import RenderingMethods from "../components/RenderingMethods";
import FormHandling from "../components/FormHandling";
import HocAssignment from "../pages/HocAssignment";


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
          <Route path="/renderingmethods" element={<RenderingMethods/>}/>
          <Route path="/formhandling" element={<FormHandling/>} />
          <Route path="/hoc" element={<HocAssignment/>} />
          

        </Route>




      </Routes>
    </>
  );
};

export default AppRoutes;
