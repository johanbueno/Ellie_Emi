import React, { Component } from 'react';

class Profile extends Component {
    state = {
        profile :null,
        error: ""
    };
    componentDidMount() {
        this.loadUserProfile();
    }
    loadUserProfile(){
        this.props.auth.getProfile((profile, error) => 
        this.setState({profile,error })
        );
    }
    render() {
        const {profile} =this.state;
        if (!profile) return null;
        return ( 
            <>
                <hi>Profile </hi>
                <p>{profile.nickname }</p>
                <img 
                style={{maxWidth:100,maxHeight:100}}
                src={profile.picture}
                alt=" profile pic"
                
                />
                <pre>{JSON.stringify(profile, null ,2)} </pre>
            </>
        );
    }
}

export default Profile;