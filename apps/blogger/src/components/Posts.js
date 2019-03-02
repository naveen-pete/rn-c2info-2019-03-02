import React from "react";

import PostDetail from "./PostDetail";
import Categories from './Categories';
import { getPosts, addPost } from '../api';

class Posts extends React.Component {
   constructor() {
      super();

      this.state = {
         posts: [],
         category: { code: 'all', name: 'All' }
      };
   }

   componentDidMount() {
      getPosts()
         .then((posts) => {
            console.log('Get posts successful!');
            this.setState({ posts });
         })
         .catch((error) => {
            console.log('Get posts failed!');
            console.log('Error:', error);
         });
   }

   handleCategorySelect = (category) => {
      this.setState({ category });
   };

   renderPostDetailElements() {
      let filteredPosts = this.state.posts;

      if (this.state.category.code !== 'all') {
         filteredPosts = this.state.posts.filter((post) => {
            return post.category === this.state.category.code
         });
      }

      return filteredPosts.map((post) => {
         return <PostDetail
            key={post.title}
            post={post}
         />;
      })
   }

   onButtonClick = () => {
      console.log(this.props);
      this.props.history.push('/posts/new');
   }

   render() {
      return (
         <div>
            <button className="btn btn-success btn-sm m-2" onClick={this.onButtonClick}>New Post</button>
            <div className="row">
               <div className="col-md-4">
                  {/* <PostForm onNewPost={this.handleNewPost} /> */}
                  <Categories onSelect={this.handleCategorySelect} />
               </div>
               <div className="col-md-8">
                  {this.renderPostDetailElements()}
               </div>
            </div>
         </div>
      );
   }

}

export default Posts;
