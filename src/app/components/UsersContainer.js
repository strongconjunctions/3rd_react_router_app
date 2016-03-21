import React from 'react';
import Users from './Users';
// import { getUsers } from 'api/User';
const users = [
    {id: 1, name: "Bill Bailey"},
    {id: 2, name: "Skunk Anansie"},
    {id: 3, name: "Tristram Shandy"},
    {id: 4, name: "Forrest Gump"},
    {id: 5, name: "Kate Bush"},
    {id: 6, name: "Aimee Mann"},
    {id: 7, name: "Elliott Smith"},
    {id: 8, name: "Jessica Lea Mayfield"}

]

export default class UsersContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {users}
    }


    render() {
        return (
            <Users users={this.state.users} />
        )
    }
}
