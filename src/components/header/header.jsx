import React from 'react';

const Header = ({onLogOut}) => {
    return (
        <header>
            {onLogOut && (<button onClick={onLogOut}>Log Out</button>)}
            <h1>header</h1>
        </header>
    );
};

export default Header;