import React, { Component } from 'react';

import styles from '../modules/App/components/Header/Header'


import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
      <ul style={{margin: '0 auto' }} >
      <li>
        <Link to="/home">home</Link>
      </li>
      <li>
        <Link to="/posts">posts</Link>
      </li>

       <li>
        <Link to="/about">about</Link>
      </li>
    </ul>
    );
  }
}



export default Nav;