import React from 'react';
import {useLoadUsers} from '../../hooks';
import loadTestUsers from '../../settings/api';

function LoadUsers(props) {
  const {data, isFetching, isError} = useLoadUsers(loadTestUsers);
  console.log(data);
  return (
    <>
        <h2>load users components</h2>
        {isError && <p>Error load users</p>}
        {isFetching && <p>Loading...</p>}
        <ul>
            {data.map( u => (<li key={u.id}> users {u.id}: {u.fullName} </li> ))}
        </ul>
    </>
  )
}

export default LoadUsers;