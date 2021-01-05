import  React,{Component} from "react";
import { Form, Icon, Input, Button } from 'antd';
import logo from "./imgs/logo.png"
import "./css/login.less"
 class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login">
                <header>
                    <img src={logo} alt="logo"/>
                    <h1>商品管理系统</h1>
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '用户名不能为空' },
                                    { max: 12, message: '用户名长度必须小于12位' },
                                    { min: 4, message: '用户名长度必须大于4位' },
                                    { pattern: /^\w+$/, message: '只能是数字字母下划线' }
                                    ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ validator: function(rule,value,callback){
                                    if (!value){callback("用户名不能为空");}
                                    if (value.length<4){callback("用户名长度必须大于4位");}
                                    if (value.length>12){callback("用户名长度必须小于12位");}
                                    if (!/^\w+$/.test(value)){callback("只能是数字字母下划线");}
                                    callback();
                                    }}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>

        );
    }
}

export default Form.create({ name: 'normal_login' })(Login);