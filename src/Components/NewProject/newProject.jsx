import InputBar from "./inputBar";
function NewProject() {
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>   
      </menu>
      <InputBar label="Title" />
      <InputBar label="Description" textarea />
      <InputBar label="Due Date" />
    </div>
  );
}

export default NewProject;
