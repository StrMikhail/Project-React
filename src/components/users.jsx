import React, { useState } from 'react';
import api from "../api"
import TableUsers from './TableUsers';
import UserComponent from './UserComponent';

const Users = () => {
    const [peoples, setPeoples] = useState(api.users.fetchAll())
    console.log(peoples)
    if (peoples.length === 0){
        return(
            <span className="badge bg-danger bg-lg">Никаких сегодня вечеринок</span>
        )
    }
    return (
        <>
            <span className="badge bg-primary">
                {peoples.length} пользователей встретятся с тобой сегодня
            </span> 
            <TableUsers peoples = {peoples} setPeoples={setPeoples}/>
        </>
      
    );
};

export default Users;