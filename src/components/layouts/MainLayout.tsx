
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react'

const MainLayout = () => {
    const [sidebarCollapsed, setSideBarCollapsed] = useState(false);
    const [currentPage, setCurrentPage] = useState("Dashboard");

    return (
        <>
            <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
                <div className='flex h-screen overflow-hidden'>
                    <Sidebar
                        collapsed={sidebarCollapsed}
                        onToggle={() => setSideBarCollapsed(!sidebarCollapsed)}
                        onPageChange = {setCurrentPage}
                    />
                    <div className='flex-1 flex flex-col overflow-hidden'>
                        <Header sidebarCollapsed={sidebarCollapsed} onToggleSidebar={() => setSideBarCollapsed(!sidebarCollapsed)} currentPage={currentPage}/>
                        <main className='flex-1 overflow-y-auto bg-transparent'>
                            <div className='p-6 space-y-6'>
                                <Outlet />
                            </div>
                        </main>
                    </div>

                </div>

            </div>

        </>
    )
}

export default MainLayout
