import React from 'react';
import Topbar from '../Topbar';
import Footer from '../Footer';

function BaseLayout() {
    return (
        <React.Fragment>
        <Topbar />

        <Footer />
        </React.Fragment>
    );
};

export default BaseLayout;