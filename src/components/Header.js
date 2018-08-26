import React from 'react';
import { css } from 'emotion';

const headerImageStyle = css`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;

const Header = (props) => {
    return (
        <header>
            <img className={headerImageStyle} src={props.image} alt={props.altTag}/>
        </header>
    );
}

export default Header;
