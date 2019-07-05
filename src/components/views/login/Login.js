// modules
import React from 'react';

// components
import Header from '../../~reusables/layout/Header';
import Footer from '../../~reusables/layout/Footer';
import LoginBody from './LoginBody';

const Login = () => {
    return (
        <div>
            <Header />
            <LoginBody />
            <Footer />
        </div>
    )
}

export default Login;