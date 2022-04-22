import React from "react";
import PropTypes from "prop-types";

const UsersLenghtSpan = ({ len }) => {
    return (
        <>
            {/* {len > 0
            ? ( <div className="badge bg-primary p-2 m-2">
                {len.length} пользователей встретятся с тобой сегодня
            </div>)
            : (<divclassName="badge bg-primary p-2 m-2">
                Никаких больше вечеринок
            </divclassName=>)} */}
            <div className="badge bg-primary p-2 m-2">
                {len.length} пользователей встретятся с тобой сегодня
            </div>
        </>
    );
};

UsersLenghtSpan.propTypes = {
    len: PropTypes.array.isRequired
};

export default UsersLenghtSpan;
