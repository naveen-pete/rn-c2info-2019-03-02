import React, { Component } from 'react';
import { getCategories } from '../api';

const allCategory = {
   code: 'all',
   name: 'All'
}

class Categories extends Component {
   state = { categories: [] };

   componentDidMount() {
      getCategories()
         .then(categories => {
            this.setState({ categories: [allCategory, ...categories] });
            console.log('Get categories successful!');
         })
         .catch((error) => {
            console.log('Get categories failed.');
            console.log('Error:', error);
         });
   }

   renderCategories() {
      return this.state.categories.map(category => {
         return <li onClick={() => { this.props.onSelect(category) }} key={category.code} className="list-group-item list-group-item-action">
            {category.name}
         </li>
      });
   }

   render() {
      return (
         <ul className="list-group">
            {this.renderCategories()}
         </ul>
      );
   }
}

export default Categories;