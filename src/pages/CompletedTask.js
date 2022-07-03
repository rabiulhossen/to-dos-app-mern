import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function CompletedTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://secret-ridge-55956.herokuapp.com/add")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div>
      <h2 className="my-3">Completed Task</h2>
      <Table striped bordered hover variant="dark">
        {tasks.map(
          (task, index) =>
            task.completed === true && (
              <tbody key={index}>
                <tr>
                  <td>{task.completed}</td>{" "}
                </tr>
                <tr>
                  <td>{task.inputValue}</td>{" "}
                </tr>
              </tbody>
            )
        )}
      </Table>
    </div>
  );
}
