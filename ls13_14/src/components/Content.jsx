import { Component} from 'react'
import {Users} from '../components/Users'
import {Posts} from '../components/Posts'
import {Comments} from '../components/Comments'

export class Content extends Component {
    render () {
        return (
            <div className='content'>
                <h1>Content</h1>
                <h2>Users:</h2>
                <Users/>
                <hr/>
                <h2>Posts:</h2>
                <Posts/>
                <h2>Comments:</h2>
                <Comments/>
            </div>
        )
        
    }
}