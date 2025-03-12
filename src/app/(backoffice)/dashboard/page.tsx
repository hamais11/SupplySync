import ChartsDashboard from '@/components/backoffice/ChartsDashboard'
import Heading from '@/components/backoffice/Heading'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div>
      <Heading title='Dashboard Overview hosana'/>
     {/* large Cards */}
    {  <LargeCards/>}
     {/* small Cards */}
     {<SmallCards/>}
     {/* large Cards */}
     {/* charts */}
    { <ChartsDashboard/>}
     {/* Recent orders table */}

    { /*<CustomDataTable/>*/}

    </div>
  )
}
