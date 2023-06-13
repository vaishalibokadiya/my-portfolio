import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="block p-2rem">
      <div className="flex-1 w-100">
        <div className="w-60">
          <h6>Let's get connected</h6>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <FormGroup>
              <Form.Control type="email" placeholder="Your email" />
            </FormGroup>
            <FormGroup>
              <Form.Control
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
