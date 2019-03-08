import React, {Component} from 'react';

class Post extends Component {
    render(){
        return(
            <article>
                <div className="article-content">
                    <h1 className="article-title">
                        {this.props.title}
                    </h1>
                    <h2 className="article-date">
                        {this.props.date}
                    </h2>
                    <p className="article-body">
                        {this.props.content}
                    </p>
                </div>
                <img 
                    className="article-img"
                    src={this.props.image} 
                    alt="article-img"
                />
            </article>
        )
    }
}
export default Post;