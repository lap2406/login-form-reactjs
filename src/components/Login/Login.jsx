import React from 'react';
import './Login.scss';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';

const listUser = [
    {
        email: 'test1@gmail.com',
        password: '1',
    },
    {
        email: 'test2@gmail.com',
        password: '2',
    },
];

const checkLogin = (arr, data) => {
    var result = {
        index: -1
    };

    arr.forEach((item, i) => {
        if (item.email === data.email && item.password === data.password) {
            result.index = i;
            result.item = item;
        }
    });

    return result;
}

const Login = () => {
    const history = useHistory();

    const onFinish = (values) => {
        const islogin = checkLogin(listUser, values)
        if (islogin.index != -1) {
            localStorage.setItem("login", true);
            history.replace("/")
        } else {
            alert("Email or password wrong");
        }
    };

    const onFinishFailed = (errorInfo) => {
        alert("Email or password wrong");
    };

    const checkInputEmail = (_, value) => {
        var re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        const isEmail = re.test(value);
        if (value && isEmail) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Please enter the email'));
    };

    return (
        <div className="login">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            validator: checkInputEmail
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;