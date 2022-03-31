import React from 'react';

const UsersLenghtSpan = (props) => {
    
    return (
       <>
            <div className="badge bg-primary p-2 m-2">
                {props.len.length} пользователей встретятся с тобой сегодня
            </div> 
       </>
    );
};

export default UsersLenghtSpan;