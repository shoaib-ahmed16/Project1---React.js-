import React, { useEffect, useState,useCallback } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './Hooks/use-http';
function App() {
  const [tasks, setTasks] = useState([]);



   const {isLoading,error,sendRequest:fetchTasks}=useHttp();

  useEffect(() => {
    
    const transformTask = tasksObj =>{
    const loadedTasks =[];
    for(const taskKey in tasksObj){
      loadedTasks.push({id:taskKey,text:tasksObj[taskKey].text})
    }

    setTasks(loadedTasks);
  }

  fetchTasks({url:"https://react-backend-ba397-default-rtdb.firebaseio.com/tasks.json"},transformTask);

  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
