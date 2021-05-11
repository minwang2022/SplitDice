import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h1>Split Dice</h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </nav>
            </div>
        )
    }
}

export default Greeting;