import React, { useState, useEffect } from "react";
import UserComponent from "./UserComponent";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate.js";
import PropTypes from "prop-types";
import GroupList from "./GroupList";
import api from "../api";

const UsersTable = ({ peoples, removeItem }) => {
    const users = peoples;
    const pageSize = 4;

    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) =>
            setProfessions(data)
        );
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, users]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
        : users;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions &&
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}/>
                    <button className="btn btn-secondary mt-2"
                        onClick={clearFilter}>Очистить фильтр</button>
                </div>
            }
            <div className="d flex flex-column">
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
                    {userCrop.map((user) => (
                        <UserComponent
                            user={user}
                            key={user._id}
                            removeItem={removeItem}
                        />
                    ))}
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={filteredUsers.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

UsersTable.propTypes = {
    peoples: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default UsersTable;
