import React, { Component } from 'react';

export default class DeleteButton extends Component {
  constructor(props){
    super(props);

  };

  render(){
    return (
      <form onSubmit={this.submit}>
        <input type="submit" value="DELETE" />
      </form>
    )
  }
}