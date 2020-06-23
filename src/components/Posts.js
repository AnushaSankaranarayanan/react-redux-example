import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  //will be called wherever there is a change to the state
  componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);//add to the start
    }
  }
    render() {
      const postItems = this.props.posts.map(
        post => (
          <div key = {post.id}>
            <h3>{post.title} </h3>
            <p>{post.body} </p>
          </div>
        )
      );
      return (
        <div>
          <h1> Posts </h1>
          {postItems}
        </div>
      )
    }
}

//put the property to the props(accessible via this.props.posts)
const mapStateToProps = (state) => (
  {
    posts : state.posts.items,
    newPost : state.posts.item
  }
); //posts taken from reducers/index.js and items and item from reducers/postReducer

export default connect(mapStateToProps , {fetchPosts})(Posts);
