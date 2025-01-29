import { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';
import { List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <List sx={{ width: '100%' }}>
      {tasks.length === 0 ? (
        <Typography variant="body1">No tasks found</Typography>
      ) : (
        tasks.map((task) => <TaskItem key={task._id} task={task} />)
      )}
    </List>
  );
};

export default TaskList;