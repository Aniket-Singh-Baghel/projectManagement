import NewTask from "./NewTask";
import styles from './SelectedProject.module.css'
import PropType from "prop-types";
function Tasks({ onAdd, tasks, onDelete }) {
  return (
    <section className={styles.section}>
      <h2>Tasks</h2>
      <NewTask onAddTask={onAdd} />
      {tasks.length === 0 && <p className={styles.emptyTask}>This Project has does not any tasks yet.</p>}
      {tasks.length>0 && <ul className={styles.listContainer}>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.taskData}</p>
            <button onClick={()=>onDelete(task.id)}>Clear</button>
          </li>
        ))}
      </ul>}
    </section>
  );
}

Tasks.propTypes = {
  onAdd: PropType.func.isRequired,
  tasks: PropType.array,
  onDelete:PropType.func
};

export default Tasks;
