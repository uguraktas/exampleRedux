import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);

  }

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input onChange={this.onChange} value={this.state.title} type="text" name="title" />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <input onChange={this.onChange} value={this.state.body} type="text" name="body" />
          </div>
          <button type="submit">Ekle</button>
        </form>

      </div>
    )
  }
}

Postform.PropTypes = {
  createPost: PropTypes.func.isRequired
};


export default connect(null, { createPost })(Postform);