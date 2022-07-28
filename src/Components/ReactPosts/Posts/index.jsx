import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.data.head}</h2>
        <p>{this.props.data.content}</p>
      </div>
    )
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.string,
    content: PropTypes.string,
  })
}

Post.defaultProps = {
  data: {
    head: '',
    content: '',
  }
}