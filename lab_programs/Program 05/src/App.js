import './App.css';
import ListTask from './component/ListTask';
import Addtask from './component/Addtask';
import { useState } from "react";
function App()
{
const[tasks,setTasks]=useState([]);
return (
<div>
<Addtask tasks={tasks} setTasks={setTasks}/>
<ListTask tasks={tasks} setTasks={setTasks}/>
</div>
);
}
export default App;