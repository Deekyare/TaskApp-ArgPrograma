import { Route, Routes } from "react-router-dom";
import AddTasks from "../components/AddTask/AddTasks";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Home from "../pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRouter = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskDetail />} />
        <Route path="/add-task" element={<AddTasks />} />
        <Route path="/task/detalle" element={<TaskDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
