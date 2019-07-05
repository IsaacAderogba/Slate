// modules
import React from 'react';

// components
import Header from '../../~reusables/layout/Header';
import SignupHero from './SignupHero';
import Footer from '../../~reusables/layout/Footer';

const Signup = () => {
    return (
        <div>
            <Header />
            <SignupHero />
            <Footer />
        </div>
    )
}

export default Signup;