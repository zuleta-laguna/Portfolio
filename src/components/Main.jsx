import React from 'react'
import ButtonSocialNetwork from './ButtonSocialNetwork'
import Twitter from '../Svg/Twitter'
import Instagram from '../Svg/Instagram'
import Github from '../Svg/Github'

function Main() {
  return (
  <section  className=' mt-40 flex flex-col items-center'>
    <div id='TitleMain'>
      <h2 className=' text-6xl font-black'>HEY <span className='text-yellow-500'>THERE</span> <br />I'M WILBERTO ZULETA </h2>
    </div>
    <div className='flex gap-10 mt-16'>
    <ButtonSocialNetwork
    href="https://x.com/BetoDeveloper"
    >
      <Twitter/>
    </ButtonSocialNetwork>
    <ButtonSocialNetwork
    href="https://www.instagram.com/beto_coding/">
      <Instagram/>
    </ButtonSocialNetwork>
    <ButtonSocialNetwork
    href="https://github.com/zuleta-laguna"
    >
      <Github/>
    </ButtonSocialNetwork>
    </div>
  </section>
  )
}

export default Main
