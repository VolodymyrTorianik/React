import { Component} from 'react'
import {posts} from '../constants/Posts'
import {Post} from '../components/Post'

export class Posts extends Component {
    posts = posts;

    constructor () {
        super()
        console.log(this.posts);       
    }

    render () {
        return (
        <div>
            { posts.filter((post)=> post.id <= 10).map(post => <Post key={post.id} post={post}/>) }
        </div>
        )    
    }
}