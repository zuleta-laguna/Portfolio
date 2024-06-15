import React from 'react'

function ProjectsCard({children}) {
  return (
    <div id='Project-Card' className='w-2/6 min-h-56 border border-gray-700 mt-10 hover:shadow-md hover:shadow-yellow-400 hover:border-yellow-500 p-7 relative'>
      {children}
    </div>
  )
}

export default ProjectsCard
