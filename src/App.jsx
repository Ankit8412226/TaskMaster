import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx"; // Separate Layout component

import Task from "./pages/Task";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
import User from "./pages/User";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Dshboard from "./pages/Dshboard.jsx";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dshboard />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/completed/:status" element={<Task />} />
          <Route path="/in-progress/:status" element={<Task />} />
          <Route path="/todo/:status" element={<Task />} />
          <Route path="/team" element={<User />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Toast notifications */}
      <Toaster richColors />
    </main>
  );
};

export default App;
