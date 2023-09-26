import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://my-portfolio-server-wljg.onrender.com", {
        name,
        email,
        message,
      });
    } catch (error) {
      console.log(error);
    }
    clear();
    // setName("");
    // setEmail("");
    // setMessage("");
  };
  const clear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex-center h-95vh sm-height" id="contact">
      <div className="w-50 sm-contact">
        <div>
          <h2 className="text-blue">Let's get connected</h2>
          <Form method="POST" onSubmit={submitHandler}>
            <Form.Group>
              <Form.Control
                id="name"
                className="w-full form-input h-2rem"
                type="text"
                placeholder="Your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <FormGroup>
              <Form.Control
                id="email"
                className="w-full form-input h-2rem"
                type="email"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Form.Control
                id="message"
                className="w-full form-textarea p-1rem"
                as="textarea"
                placeholder="Type your message here"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>
            <Button
              className="w-full btn letter-spacing"
              type="submit"
              variant="primary"
            >
              SUBMIT
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// https://my-portfolio-server-wljg.onrender.com
