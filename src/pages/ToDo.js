import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ToDo.css'

export default function ToDo() {
  const [show, setShow] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://secret-ridge-55956.herokuapp.com/add")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const handleCompletedTask = (_id) => {
    fetch(`https://secret-ridge-55956.herokuapp.com/add/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const handleUpdateData = (e, id) => {
    e.preventDefault();
    const updatedTask = e.target.updatedTask.value;
    fetch(`https://secret-ridge-55956.herokuapp.com/add/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedTask: updatedTask }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div>
      <div className="bg-dark py-4 px-3  ">
        <div className="d-flex ">
          <div className="d-flex items-center">
           
          </div>
          <button className="my-4 text-center mx-auto ">
            <Link
              to={"/"}
              as="p"
              className="bg-primary fw-bold text-light text-decoration-none text-center px-3 rounded"
            >
              Added Task
            </Link>
          </button>
        </div>
        <div className="mt-7 text-center todo-con ">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {tasks?.map(
                (task, index) =>
                  task.completed !== true && (
                    <tr key={index} className="h-16 border border-info rounded">
                      <td>
                        <div className="ml-5">
                          <div className=" rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input
                              onChange={() => handleCompletedTask(task._id)}
                              type="checkbox"
                              className=" w-full h-full"
                            />
                          </div>
                        </div>
                      </td>
                      <td className>
                        <div className="d-flex items-center pl-5">
                          <p className=" font-medium leading-none text-primary ms-2">
                            {task.inputValue}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="relative px-5 pt-2">
                          {show === index ? (
                            <div
                              className="focus:outline-none"
                              onClick={() => setShow(null)}
                            >
                              <button className="text-sm leading-none  py-3 px-5  rounded  focus:outline-none">
                                Edit
                              </button>
                            </div>
                          ) : (
                            <div
                              className="focus:outline-none"
                              onClick={() => setShow(index)}
                            >
                              <button className="text-sm leading-none  rounded focus:outline-none">
                                Edit
                              </button>
                            </div>
                          )}
                          {show === index && (
                            <form
                              onSubmit={(e) => handleUpdateData(e, task._id)}
                              className="dropdown-content bg-white shadow w-full absolute z-30 right-0 mr-6 "
                            >
                              <div className="text-xs w-full py-4 px-4 cursor-pointer hover:text-white">
                                <input
                                  aria-label="task"
                                  defaultValue={task.inputValue}
                                  name="updatedTask"
                                  type="text"
                                  placeholder="Update Task"
                                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                />
                              </div>
                              <div className="text-sm cursor-pointer hover:text-white">
                                <input
                                  type={"submit"}
                                  value="Update"
                                  className="bg-info border-none"
                                />
                              </div>
                            </form>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
