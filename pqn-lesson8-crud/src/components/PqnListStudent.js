import React from "react";

export default function NqmListStudent({
  renderPqnListTasks,
  onEditTask,
  onRemoveTask,
}) {
  console.log(renderPqnListTasks);

  // Render data
  let pqnElementTask = renderPqnListTasks.map((task, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{task.pqnId}</td>
        <td>{task.pqnName}</td>
        <td>{task.pqnAge}</td>
        <td>{task.pqnIsActive ? "Active" : "Inactive"}</td>
        <td>
          <button className="btn btn-success" onClick={() => onEditTask(index)}>
            sửa
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onRemoveTask(index)}
          >
            xóa
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>danh sách các nhiệm vụ</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>{pqnElementTask}</tbody>
      </table>
    </div>
  );
}
