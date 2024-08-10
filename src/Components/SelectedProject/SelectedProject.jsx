import PropType from 'prop-types'
import Tasks from './Tasks'
function SelectedProject({project,onDeleteProject,tasks,onAddTask,onDeleteTask}) {
   const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
    year:'numeric',
    month:'short',
    day:'numeric'
   })
  return (
    <div>
        <header>
            <div>
                <h1>{project.title}</h1>
                <button onClick={onDeleteProject}>Delete</button>
            </div>
            <p>{formattedDate}</p>
            <p>{project.description}</p>
        </header>
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