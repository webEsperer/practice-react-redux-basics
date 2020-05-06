import React from 'react';

const UserItem = ({name = 'Default Name', id = -1}) => {
    return (
        <li>{name} <button>usuń</button></li>
    )
}

export default UserItem;