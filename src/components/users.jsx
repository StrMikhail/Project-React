import React from "react";
import UsersTable from "./UsersTable";
import UsersLenghtSpan from "./UsersLenghtSpan";
import PropTypes from "prop-types";

const Users = ({ peoples, removeItem }) => {
    return (
        <>
            <UsersLenghtSpan len={peoples} />
            <UsersTable peoples={peoples} removeItem={removeItem}/>
        </>
    );
};

Users.propTypes = {
    peoples: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    removeItem: PropTypes.func.isRequired
};
export default Users;
