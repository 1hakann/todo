import React, { Component } from 'react'

class UserProvider extends Component {

    state = {
        isVisible : false
    };

    render() {
        const UserContext = React.createContext();
        const {isVisible} = this.state;

        return (
            <UserContext.Provider>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider