import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-brand">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul>
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                }
                {props.children && props.children}
            </ul>
        </div>
    );
};

export default FooterCol;