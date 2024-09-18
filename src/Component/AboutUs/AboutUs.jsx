import React from 'react'
import ReusableCont from '../ReusableCont/ReusableCont'

const AboutUs = () => {
  return (
    <div className='bg-black text-white'>
    <ReusableCont 
    headings={['ABOUT US', 'We Are Here To', 'Amplify Your Brand']} 
    paragraphs={[
      'We are pleased to serve your brand with great ambition in our heart. All you need to do is trust us and we will provide you with the best campaign.',
      'We are pleased to serve your brand with great ambition in our heart. All you need to do is trust us and we will provide you with the best campaign.'
    ]}
  />
  </div>
  )
}

export default AboutUs