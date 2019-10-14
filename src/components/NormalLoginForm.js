import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from "react"
import "../css/WrappedNormalLoginForm.css"
import { connect } from "react-redux"
import { loginSubmit } from "../store/action";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import compose from 'recompose/compose';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.props.loginSubmit) {
                    this.props.loginUser(values)
                }
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-box">
                <div className="login-title">用户登录</div>
                <Form className="login-form" onSubmit={this.handleSubmit} action="">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className="login-form-box">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox><a className="login-form-forgot" href="">记住我</a></Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </div>
        )

    }
}
const mapStateToProps = state => ({
    token: state.token
})
const mapDispatchToProps = (dispatch) => {
    return {
        loginSubmit: (e) => {
            dispatch(loginSubmit(e))
        }
    }
}


// #region login user muation
const logUserMutation = gql`
    mutation($username:String,$password:String) {
        login(username:$username,password:$password) {
            code
            message
            token
        }
    }
`;

const logUserMutationOptions = {
    props: ({ ownProps, mutate }) => ({
        async loginUser(user) {
            try {
                const payload = {
                    variables: {
                        username: user.username,
                        password: user.password
                    }
                };
                const data = await mutate(payload);
                console.log(data);
                ownProps.loginSubmit(data.data.login.token);
                return Promise.resolve();
            } catch (error) {
                console.log(error)
                return Promise.reject();
            }
        },
    }),
};
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(WrappedNormalLoginForm);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(logUserMutation, logUserMutationOptions),
)(WrappedNormalLoginForm);