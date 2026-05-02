import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>Users from users component.</h2>

            <table className='table-auto border-collapse border border-slate-400'>
                <thead>
                    <tr>
                        <th className='border border-slate-300'>ID</th>
                        <th className='border border-slate-300'>Name</th>
                        <th className='border border-slate-300'>Email</th>
                        <th className='border border-slate-300'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className='border border-slate-300'>{user.id}</td>
                            <td className='border border-slate-300'>{user.name}</td>
                            <td className='border border-slate-300'>{user.email}</td>
                            <td className='border border-slate-300'>
                                <Link to={`${user.id}`}>Show details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;