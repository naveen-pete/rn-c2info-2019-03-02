import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./components/Header";
import Nav from './components/Nav';
import Home from './components/Home';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends React.Component {

   render() {
      return (
         <BrowserRouter>
            <div className="container">
               <Header />
               <Nav />
               <Route path="/" exact component={Home} />
               <Route path="/posts" exact component={Posts} />
               <Route path="/posts/new" component={PostForm} />
            </div>
         </BrowserRouter>
      );
   }

}

export default App;
