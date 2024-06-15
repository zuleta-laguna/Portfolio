import React from 'react'

function NavigationItems({href,children}) {
  return (
   <a href={href} className='text-white font-medium text-2xl hover:text-yellow-500'>{children}</a>
  )
}

export default NavigationItems
