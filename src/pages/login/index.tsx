// src/pages/Login/index.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'react-intl';
import './index.less';

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const intl = useIntl();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginForm) => {
    setLoading(true);
    try {
      // 这里添加实际的登录逻辑
      console.log('Received values username: ', process.env.GATSBY_ADMIN_USERNAME, 'password: ', process.env.GATSBY_ADMIN_PASSWORD);
      if (values.username === process.env.GATSBY_ADMIN_USERNAME && values.password === process.env.GATSBY_ADMIN_PASSWORD) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '/resume'; // 登录成功后跳转到主页
      } else {
        throw new Error(intl.formatMessage({ id: '用户名或密码错误' }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Card title={<FormattedMessage id="登录" />} className="login-card">
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: intl.formatMessage({ id: '请输入用户名' }) }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={intl.formatMessage({ id: '用户名' })}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: intl.formatMessage({ id: '请输入密码' }) }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={intl.formatMessage({ id: '密码' })}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              <FormattedMessage id="登录" />
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
