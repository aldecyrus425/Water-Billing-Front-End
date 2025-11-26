import React, { useState } from 'react'
import { CreateUserModal } from '../../components/modals/user/addModal'
import { UpdateUserModal } from '../../components/modals/user/updateModal';
import { TableButton } from '../../components/TableButtons';

const Users = () => {
    const [addUserModal, setAddUserModal] = useState(false);
    const [updateUserModal, setUpdateUserModal] = useState(false);
    return (
        <div>
            <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 space-y-5'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Users</h3>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>List's of all users</p>
                        </div>
                        <button className='border rounded-lg p-3 text-blue-600 hover:text-white hover:bg-blue-600 text-sm font-medium cursor-pointer ' onClick={() => setAddUserModal(true)}>Add User</button>
                    </div>
                    <div className='overflow-y-scroll'>
                        <table className='w-full max-h-170'>
                            <thead>
                                <tr>
                                    <th className='text-left p-4 text-sm font-semibold text-slate-600'>User ID</th>
                                    <th className='text-left p-4 text-sm font-semibold text-slate-600'>Fullname</th>
                                    <th className='text-left p-4 text-sm font-semibold text-slate-600'>Phone</th>
                                    <th className='text-left p-4 text-sm font-semibold text-slate-600'>Gender</th>
                                    <th className='text-center p-4 text-sm font-semibold text-slate-600 w-50'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                                    <td className='p-4'>
                                        <span className='text-sm font-medium text-blue'>User ID</span>
                                    </td>
                                    <td className='p-4'>
                                        <span className='text-sm text-slate-800 dark:text-white'>Fullname</span>
                                    </td>
                                    <td className='p-4'>
                                        <span className='text-sm text-slate-800 dark:text-white'>Phone</span>
                                    </td>
                                    <td className='p-4'>
                                        <span className='text-sm text-slate-800 dark:text-white'>Gender</span>
                                    </td>
                                    <TableButton edit={() => setUpdateUserModal(true)} />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <CreateUserModal isVisible={addUserModal} onclose={() => setAddUserModal(false)} />
            <UpdateUserModal isVisible={updateUserModal} onClose={() => setUpdateUserModal(false)} />
        </div>

    )
}

export default Users
