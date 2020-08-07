import React from 'react'
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg'
import logoImg from '../../assets/logo.svg'

import './stylesPageHeader.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="proffy" />
            </div>
                
            <div className="header-content">
                 <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>} 
                
                 {props.children}
             </div>
        </header>
    );
}

export default PageHeader;