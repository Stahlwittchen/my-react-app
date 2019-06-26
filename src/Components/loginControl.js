import React from "react";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false, username: null};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true, username: 'Stranger'});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false, username: null});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const username = this.state.username;

        return (
            <div className='login-control'>
                <Greeting isLoggedIn={isLoggedIn} username={username} />
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                    <LoginButton onClick={this.handleLoginClick} />
                )}
            </div>
        );
    }
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <span>Welcome back, { props.username }!</span>;
    }
    return <span>Please sign up.</span>;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick} className='app-btn app-btn--primary'>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick} className='app-btn app-btn--primary'>
            Logout
        </button>
    );
}

export default LoginControl;