import React, { useState, useEffect } from 'react';

const TopBar = () => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div
        id="topbar"
        className={`d-flex align-items-center fixed-top ${
            scroll > 100 ? 'topbar-scrolled' : undefined
        }`}
        >

        </div>
    );
};

export default TopBar;