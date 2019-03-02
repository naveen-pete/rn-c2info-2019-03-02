import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
   return (
      <div className="row">
         <ul className="nav nav-pills">
            <li className="nav-item">
               <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link" activeClassName="active" to="/posts">Posts</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default Nav;
