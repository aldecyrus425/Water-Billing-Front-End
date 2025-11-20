import React from 'react'
import StatsGrid from '../../components/StatsGrid'
import ChartSection from '../../components/ChartSection'
import TableSection from '../../components/TableSection'

const AdminDashboard = () => {
  return (
    <div className='space-y-6'>
        {/* Stats Grid */}
        <StatsGrid />

        <ChartSection />

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
          <div className='xl:col-span-2'>
            <TableSection />
          </div>
        </div>
    </div>
  )
}

export default AdminDashboard
