import React, { useState, useEffect } from "react";
import api from "./api";
import Users from "../src/components/users";

const App = () => {
    const [users, setUsers] = useState();

    const removeItem = (index) => {
        setUsers((prev) =>
            prev.filter((item) => item._id !== index)
        );
    };

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    return (
        <>
            {users && <Users peoples={users} removeItem={removeItem}/> }
        </>
    );
};

export default App;
