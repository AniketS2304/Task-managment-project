import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleToggle = () => {
    setCompleted(!completed);
    // Add update task logic here
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Checkbox
        edge="start"
        checked={completed}
        tabIndex={-1}
        disableRipple
        onChange={handleToggle}
      />
      <ListItemText
        primary={task.title}
        secondary={task.description}
        sx={{ textDecoration: completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TaskItem;