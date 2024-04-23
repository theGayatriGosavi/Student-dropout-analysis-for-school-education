import { Button, Form, Input, Typography, message } from "antd";
import "./index.css";
import { useState } from "react";
import { redirect } from "react-router-dom";
function SignIn(props) {
    
    const login = () => {
        message.success("Login Successful");
        props.setCurrent(1);
    }

  return (
    <div className="signinbg">
      <Form className="LoginForm">
        <Typography.Title>{props.title}</Typography.Title>
        <Form.Item
          label="Email"
          name={"myEmail"}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"myPassword"}
          rules={[
            {
              message: "Enter your password!",
              required: true,
            },
          ]}
        >
          <Input.Password placeholder="Enter your paswword" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ color: "white" }}
          onClick={login}
          block
        >
          Enter
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
