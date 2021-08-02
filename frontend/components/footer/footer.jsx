import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faIgloo  } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        <a href=""></a>
        return(
            <footer className="main-footer">
                <div className="footer-logo-container">
                    <Link className="logo-box" to="/" style={{ textDecoration: 'none', color: "black" }}> <FontAwesomeIcon className="logo-footer" icon={faIgloo} size='3x' />
                        <p className='logo-footer-title'>Splitdice</p>
                    </Link>
                </div>
                
                
                <div className="link-container">
                    <a target="_blank" href="http://linkedin.com/in/mike-wang-38294097"><i className="fab fa-linkedin"></i></a>
                    <a target="_blank" href="https://github.com/minwang2022"><i className="fab fa-github"  ></i></a>
                    <a target="_blank" href="https://angel.co/min-wang-13/"><i className="fab fa-angellist"  ></i></a>
                    <a target="_blank" href="https://minwang.com"> <i id="port" className="fas fa-user"></i></a>
                    
                    
                </div>
                
            </footer>
        )
    }
}

export default Footer;