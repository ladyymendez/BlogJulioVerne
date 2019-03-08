import React, {Component } from 'react';
import Post from './Post';
class Posts extends Component {
    state = {loading: false, posts:[]}
    async componentDidMount(){
        this.setState({loading:true});
        const response= await fetch('http://localhost:8080/posts')
        const { payload } = await response.json();
        console.log("PORp", payload.posts[0])
        this.setState({loading:false, posts:payload.posts});
    }
    render(){
        const className = this.state.loading 
            ? 'posts is-loading'
            : 'posts';
        return (
            <ul className={className}>
            {
                this.state.posts.map((post,index)=>(
                        <Post
                            title={post.title}
                            date={post.date}
                            content={post.content}
                            image={post.image}
                            key={index}
                         />
                    )
                )
                
            }
            </ul>
        )
    }
}

export default Posts;