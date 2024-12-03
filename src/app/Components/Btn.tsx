import React from 'react';


const Btn = ({name}: {name: string}) => {



    return (
        <a className="app-btn"
        >
            {name}
        </a>
    );
};

export default Btn;