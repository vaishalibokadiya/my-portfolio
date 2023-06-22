import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="flex-center h-95vh sm-height" id="contact">
      <div className="w-50 sm-contact">
        <div>
          <h2 className="text-blue">Let's get connected</h2>
          <Form
            className=""
            action="https://formsubmit.co/el/dubewe"
            method="POST"
          >
            <Form.Group>
              <Form.Control
                className="w-full form-input h-2rem"
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </Form.Group>
            <FormGroup>
              <Form.Control
                className="w-full form-input h-2rem"
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Form.Control
                className="w-full form-textarea p-1rem"
                as="textarea"
                placeholder="Type your message here"
                name="message"
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
