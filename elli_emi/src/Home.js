import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from './Jumbotron';
import Images from './ImgThumbnails';
import Likes from './Likes';

class Home extends Component {
    render() {
        const { isAuthenticated, login } = this.props.auth;
        return (
            <div>
                <h1 id= "home">Home</h1>
                {isAuthenticated() ? (
                    <Link to="/profile">View profile</Link>
                ) : (
                        <button onClick={login}>Log In</button>
                    )}
            
                <br></br>
                <Jumbotron/>
                <Images/>
                <Likes/>

            </div>
        );
    }
}

export default Home;