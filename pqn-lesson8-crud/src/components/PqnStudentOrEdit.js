import React, { useState, useEffect } from "react";

export default function NqmStudentOrEdit({ pqnOnSubmit, pqnEditingTask }) {
  const pqnTasksObj = {
    pqnId: 0,
    pqnName: "",
    pqnAge: 0,
    pqnIsActive: false,
  };
  const [pqnTask, setPqnTask] = useState(pqnTasksObj);

  useEffect(() => {
    if (pqnEditingTask !== null) {
      setPqnTask(pqnEditingTask);
    } else {
      setPqnTask(pqnTasksObj);
    }
  }, [pqnEditingTask]); // eslint-disable-line react-hooks/exhaustive-deps

  const pqnHandleChange = (pqnEvent) => {
    let Name = pqnEvent.target.name;
    let value =
      pqnEvent.target.type === "checkbox"
        ? pqnEvent.target.checked
        : pqnEvent.target.value;

    setPqnTask((prev) => {
      return {
        ...prev,
        [Name]: value,
      };
    });
  };

  const pqnHandleSubmit = (pqnEvent) => {
    pqnEvent.preventDefault();
    pqnOnSubmit(pqnTask);
    setPqnTask(pqnTasksObj);
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>{pqnEditingTask ? "Sửa Task" : "Thêm mới Task"}</h2>
      </div>
      <div className="card-body">
        <form onSubmit={pqnHandleSubmit}>
          <div className="form-group mb-3">
            <label>Task ID</label>
            <input
              type="text"
              name="pqnId"
              value={pqnTask.pqnId}
              onChange={pqnHandleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Task Name</label>
            <input
              type="text"
              name="nqmName"
              value={pqnTask.pqnName}
              onChange={pqnHandleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Age</label>
            <input
              type="number"
              name="pqnAge"
              value={pqnTask.pqnAge}
              onChange={pqnHandleChange}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Status</label>
            <div className="form-check">
              <input
                type="checkbox"
                name="pqnIsActive"
                checked={pqnTask.pqnIsActive}
                onChange={pqnHandleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Ghi lại
          </button>
        </form>
      </div>
    </div>
  );
}
