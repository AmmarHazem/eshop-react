import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { setLoginSuccessData } from "../redux/auth";
import useLogin from "../customHooks/useLogin";
import "../styles/login.scss";

const Login = () => {
  const [form] = Form.useForm();
  const [result, login] = useLogin();
  const navigate = useNavigate();
  // const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { loading } = result;
  // console.log("--- redux", auth);

  useEffect(() => {
    if (!result.data) return;
    dispatch(setLoginSuccessData(result.data));
    // debugger;
    navigate("/");
  }, [result, dispatch, navigate]);

  const onFormFinishSuccess = (values) => {
    // console.log("--- onFormFinishSuccess", values);
    login(values);
  };

  return (
    <main className="login">
      <div className="login-card">
        <Form
          // onFinishFailed={onFormFinishFaild}
          onFinish={onFormFinishSuccess}
          form={form}
          layout="vertical"
        >
          <Form.Item
            rules={[
              {
                validator: (rule, value) => {
                  if (!value) {
                    return Promise.reject("Please enter your username");
                  } else if (value.length < 3) {
                    return Promise.reject("Please enter valid username");
                  }
                  return Promise.resolve();
                },
              },
            ]}
            label="Username"
            name="name"
          >
            <Input placeholder="John" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                validator: (rule, value) => {
                  if (!value) {
                    return Promise.reject("Please enter your password");
                  } else if (value.length < 6) {
                    return Promise.reject("Please enter a valid password");
                  }
                  return Promise.resolve();
                },
              },
            ]}
            label="Password"
            name="password"
          >
            <Input placeholder="*********" type="password" />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} htmlType="submit" type="primary">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
};

export default Login;
