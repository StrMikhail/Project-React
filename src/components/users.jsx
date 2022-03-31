import React, { useState } from 'react';
import api from "../api"
import UsersTable from './UsersTable';
import UsersLenghtSpan from './UsersLenghtSpan';

const Users = () => {
    const [peoples, setPeoples] = useState(api.users.fetchAll())

    if (peoples.length === 0){
        return(
            <span className="badge bg-danger bg-lg">Никаких сегодня вечеринок</span>
        )
    }

    return (
        <>
            <UsersLenghtSpan len={peoples}/>
            <UsersTable peoples = {peoples} setPeoples={setPeoples}/>
        </>
      
    );
};

export default Users;