import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="block p-2rem contact">
      <div className="flex-1 w-100">
        <div className="w-60">
          <h2 className="other-lines">Let's get connected</h2>
          <Form className="w-100">
            <Form.Group>
              <Form.Control
                className="w-100 form"
                type="text"
                placeholder="Your name"
              />
            </Form.Group>
            <FormGroup>
              <Form.Control
                className="w-100 form"
                type="email"
                placeholder="Your email"
              />
            </FormGroup>
            <FormGroup>
              <Form.Control
                className="w-100 form mb-50"
                as="textarea"
                placeholder="Type your message here"
              />
            </FormGroup>
            <Button type="submit" variant="primary" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
