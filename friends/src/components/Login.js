import React from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        console.log("login attempt");
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        });
    };

    render() {
        return (
            <div>  
                <form onSubmit ={this.login}>
                    <input 
                        type="text"
                        name = "username"
                        value = {this.state.credentials.username}
                        onChange = {this.handleChange}
                    />
                    <input 
                        type="password"
                        name = "password"
                        value = {this.state.credentials.password}
                        onChange = {this.handleChange}
                    />
                    <button onSubmit ={this.login}>submit</button>
                </form>
                </div>
                
        )
    }
}


const mapStateToProps = ({ loggingIn, error }) => ({
    error,
    loggingIn
});

export default connect(
    mapStateToProps,
    {login}
)(Login);