import React from 'react';

export default class Users extends React.Component {
    render() {
        return (
            <div className="users-page">
                <h1>Users</h1>
                <div className="user-wrapper">
                    {this.props.users.map(function(user, i) {
                        return (
                            <li key={user.id} className="user-name">{user.name}</li>
                        );
                    })}
                </div>
            </div>
        )
    }
}