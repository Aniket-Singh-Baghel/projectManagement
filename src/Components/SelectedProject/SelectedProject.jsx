import PropType from 'prop-types'
import Tasks from './Tasks'
function SelectedProject({project,onDelete}) {
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
                <button onClick={onDelete}>Delete</button>
            </div>
            <p>{formattedDate}</p>
            <p>{project.description}</p>
        </header>
        <Tasks/>
    </div>
  )
}

SelectedProject.propTypes={
    project:PropType.node.isRequired,
    onDelete:PropType.func.isRequired
}

export default SelectedProject