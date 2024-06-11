import React, { useState } from "react";
import "./App.css";
import PqnListStudent from "./components/PqnListStudent";
import PqnStudentOrEdit from "./components/PqnStudentOrEdit";

function App() {
  const pqn_listTasks = [
    {
      pqnId: 2210900115,
      pqnName: "Phạm Quang Nhất",
      pqnAge: 20,
      pqnIsActive: true,
    },
    {
      pqnId: 1,
      pqnName: "Học lập trình frontend",
      pqnAge: 22,
      pqnIsActive: true,
    },
    {
      pqnId: 2,
      pqnName: "Học lập trình reactjs",
      pqnAge: 23,
      pqnIsActive: false,
    },
    {
      pqnId: 3,
      pqnName: "Lập trình với Frontend - Reactjs",
      pqnAge: 24,
      pqnIsActive: true,
    },
    {
      pqnId: 4,
      pqnName: "Lập trình Fullstack (PHP, Java, NetCore)",
      pqnAge: 26,
      pqnIsActive: false,
    },
  ];

  const [pqnlistTasks, setPqnListTasks] = useState(pqn_listTasks);
  const [pqnEditingTask, setPqnEditingTask] = useState(null);

  const pqnHandleSubmit = (pqnTask) => {
    if (pqnEditingTask !== null) {
      setPqnListTasks((prev) =>
        prev.map((task, index) =>
          index === pqnEditingTask.index ? pqnTask : task
        )
      );
      setPqnEditingTask(null);
    } else {
      setPqnListTasks((prev) => [...prev, pqnTask]);
    }
  };

  const pqnHandleEditTask = (index) => {
    setPqnEditingTask({ ...pqnlistTasks[index], index });
  };

  const pqnHandleRemoveTask = (index) => {
    setPqnListTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container border">
      <h1>Phạm Quang Nhất</h1>
      <hr />
      <div>
        <PqnListStudent
          renderPqnListTasks={pqnlistTasks}
          onEditTask={pqnHandleEditTask}
          onRemoveTask={pqnHandleRemoveTask}
        />
      </div>
      <div>
        <PqnStudentOrEdit
          pqnOnSubmit={pqnHandleSubmit}
          pqnEditingTask={pqnEditingTask}
        />
      </div>
    </div>
  );
}

export default App;
