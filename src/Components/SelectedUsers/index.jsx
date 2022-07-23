import React, { Component } from 'react'
// import Card from '../Card';

export default class SelectedUsers extends Component {
  render() {
    const {users} = this.props;
    const list = users.filter(u => u.isSelected);

    return (
        <ol>
            {list.map(u => <li key={u.id}>{u.name} {u.surname}</li>)}
            
        </ol>
    ) 
  }
}
