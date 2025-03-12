import React from 'react'
import WeeklySalesChart from './Charts/WeeklySalesChart'
import BestSellingProducts from './Charts/BestSellingProducts'

export default function ChartsDashboard() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      
      <WeeklySalesChart/>
      <BestSellingProducts/>
    </div>
  )
}
