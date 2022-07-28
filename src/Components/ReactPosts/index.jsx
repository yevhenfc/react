import React, { Component } from 'react'
import Post from './Posts'
import styles from './ReactPosts.module.css';


const db = [
  {head: 'qwerty', content: 'yuiop'},
  {head: 'asdfg', content: 'ghjkl'},
  {head: 'zxcvb', content: 'cvbnm'},
]

export default class ReactPosts extends Component {
  render() {
    return (
      <div  className={styles.post_conteiner}>    
      <Post data={db[0]}/>
      <Post data={db[1]} />
      <Post data={db[2]} />
      </div>
    )
  }
}
