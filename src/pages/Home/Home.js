import React, { useEffect, useState } from 'react';
import './Home.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Home() {

     const [tasks, setTasks] = useState([]);

     const handleSubmit = (e) => {
         e.preventDefault()
         const inputValue = e.target.task.value
alert('added! click To do')
         fetch('https://secret-ridge-55956.herokuapp.com/add', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({ 'inputValue': inputValue })
      })
          .then(res => res.json())
          .then(data => { })

     }
     useEffect(() => {
          fetch('https://secret-ridge-55956.herokuapp.com/add')
              .then(res => res.json())
              .then(data => {
                  setTasks(data)
              })
      }, [])
     

  return (
    <div className='home-div'>
     <h2 className="my-2">Your Work Asistant!</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="my-3 mx-auto w-25 text-center" controlId="formBasicPassword">
          <Form.Control name="task" type="text" placeholder="Add  your task" required/>
        </Form.Group>

        <Button variant="info"className="fw-semiBold " type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
