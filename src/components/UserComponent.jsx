import React,{ useState } from 'react';
import UserFavoriteFlag from './UserFavoriteFlag';

const UserComponent = (props) => {

    const user = props.user
    
    const checkFlag = () => {
        console.log('check')
    }

    const removeItem = (index) => {
        props.setPeoples(prevPeoples => prevPeoples.filter(item => item._id !== index))
    }

  

    return (
        <tbody>
            <tr>
                <th scope="row">{user.name}</th>
                    <td>{user.qualities.map(quality =>
                         <span className={`badge m-1 bg-${quality.color}`}
                         key = {quality._id}> 
                         {quality.name}
                          </span>)}
                    </td>
                    <td>{user.profession.name}</td> 
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>
                    <td><UserFavoriteFlag /></td>
                    <th scope="col">
                        <button type="button" className="btn btn-sm btn-danger "
                            onClick={() => removeItem(user._id)}>
                            Удалить
                        </button>                           
                </th>
            </tr>
        </tbody>
    );
};

export default UserComponent;