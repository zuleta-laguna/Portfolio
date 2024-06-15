import React from 'react'

function ButtonSocialNetwork({children,href}) {
  return (
    <a href={href}  className='text-white w-14 h-14 rounded-[50%] flex justify-center items-center hover:bg-yellow-500'>{children}</a>
  )
}

export default ButtonSocialNetwork
