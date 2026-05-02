import React,{use} from 'react';

const Users2 = ({userPromise}) => {
    var users = use(userPromise);

    console.log(users);
    return (
        <div>
            <h3>Users2 component</h3>
        </div>
    );
};

export default Users2;