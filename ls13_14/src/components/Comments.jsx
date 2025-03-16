import { Component} from 'react'
import {comments} from '../constants/Comments'
import {Comment} from '../components/Comment'

export class Comments extends Component {
    comments = comments;

    constructor () {
        super()
        console.log(this.comments);       
    }

    render () {
        return (
        <div>
            { comments.filter((comment)=> comment.id <= 10).map(comment => <Comment key={comment.id} comment={comment}/>) }
        </div>
        )    
    }
}