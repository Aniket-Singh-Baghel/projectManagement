import styles from './SelectedProject.module.css'
import PropType from 'prop-types'
import Tasks from './Tasks'
function SelectedProject({project,onDeleteProject,tasks,onAddTask,onDeleteTask}) {
   const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
    year:'numeric',
    month:'short',
    day:'numeric'
   })
  return (
    <div className={styles.main}>
        <header>
            <div className={styles.title}>
                <h1>{project.title}</h1>
                <button onClick={onDeleteProject}>Delete</button>
            </div>
            <p className={styles.date}>{formattedDate}</p>
            <p className={styles.desc}>{project.description}</p>
        </header>
        <div className={styles.line}></div>
        <Tasks onAdd={onAddTask} tasks={tasks} onDelete={onDeleteTask}/>
    </div>
  )
}

SelectedProject.propTypes={
    project:PropType.object,
    onDeleteProject:PropType.func.isRequired,
    onAddTask:PropType.func.isRequired,
    tasks:PropType.array,
    onDeleteTask:PropType.func
}

export default SelectedProject