import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
    render() {
        return (
            <>
                <form>
                    <div>
                        <input />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    <UserItem />
                </ul>
            </>
        )
    }
}

export default UserList;