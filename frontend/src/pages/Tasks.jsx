import { useState } from "react";
import { Container, Typography } from "@mui/material"; // Correct import
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>My Tasks</Typography>
      <AddTaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default Tasks;