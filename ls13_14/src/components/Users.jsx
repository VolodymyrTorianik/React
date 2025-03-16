import { Component} from 'react'
import {users} from '../constants/Users'
import {User} from '../components/User'

export class Users extends Component {
    users = users;

    constructor () {
        super()
        console.log(this.users);       
    }

    render () {
        return (
        <div>
            { users.map(user => <User key={user.id} user={user}/>) }
        </div>
        )    
    }
}