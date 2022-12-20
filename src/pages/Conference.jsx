import React from 'react';
import ConferenceInfo from '../components/conferneceinfo/ConferenceInfo';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';

const Conference = () => {
    return (
        <div>
            <NavBar>
                <ConferenceInfo />
                <Footer />
            </NavBar>
        </div>
    );
};

export default Conference;