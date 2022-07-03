import React from "react";
import './Home.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Home() {
  return (
    <div className='home-div'>
     <h2 className="my-2">Your Work Asistant!</h2>
      <Form >
        <Form.Group className="my-3 mx-auto w-25 text-center" controlId="formBasicPassword">
          <Form.Control type="text" placeholder="create your task" required/>
        </Form.Group>

        <Button variant="info"className="fw-semiBold" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
