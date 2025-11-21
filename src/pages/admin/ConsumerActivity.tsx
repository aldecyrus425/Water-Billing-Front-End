import React from 'react'

const ConsumerActivity = () => {
  return (
    <div className=''>
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 space-y-5'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Consumers Activity</h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>List's of all consumers activity</p>
            </div>
          </div>
          <div className='overflow-y-scroll'>
            <table className='w-full max-h-170'>
              <thead>
                <tr>
                  <th className='text-left p-4 text-sm font-semibold text-slate-600'>Consumer ID</th>
                  <th className='text-left p-4 text-sm font-semibold text-slate-600'>Fullname</th>
                  <th className='text-left p-4 text-sm font-semibold text-slate-600'>Account Number</th>
                  <th className='text-left p-4 text-sm font-semibold text-slate-600'>Meter Number</th>
                  <th className='text-left p-4 text-sm font-semibold text-slate-600'>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                  <td className='p-4'>
                    <span className='text-sm font-medium text-blue'>Consumer ID</span>
                  </td>
                  <td className='p-4'>
                    <span className='text-sm text-slate-800 dark:text-white'>Fullname</span>
                  </td>
                  <td className='p-4'>
                    <span className='text-sm text-slate-800 dark:text-white'>Account Number</span>
                  </td>
                  <td className='p-4'>
                    <span className='text-sm text-slate-800 dark:text-white'>Meter Number</span>
                  </td>
                  <td className='p-4'>
                    <span className='text-sm text-slate-800 dark:text-white'>Activity</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsumerActivity
