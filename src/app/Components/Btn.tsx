import React from 'react';


const Btn = ({name}: {name: string}) => {



    return (
        <a className="app-btn font-[poppins,sans-serif]"
        >
            {name}
        </a>
    );
};

export default Btn;