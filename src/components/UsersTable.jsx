import React, { useState } from 'react';
import UserComponent from './UserComponent';



const UsersTable = (props) => {

    const users = props.peoples
   
    return (
        <table className="table table-striped">
        <thead>
        <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встреился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
        </tr>
        </thead>
            {users.map(user => <UserComponent user = {user} key={user._id} setPeoples={props.setPeoples} />)}
        </table>
    );
};

export default UsersTable;