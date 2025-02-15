import React from 'react'

const HeroBottomCard = ({img, title, info}) => {
  return (
    <a href="#">
      <div className='flex items-center gap-[20px]'> 
        <img src={img} alt="img" />
        <div className='flex flex-col gap-[8px]'>
          <h2 className='text-[#11142d] font-bold text-[18px]'>{title}</h2>
          <p className='text-[12px] text-[#aaa]'>{info}</p>
        </div>
      </div>
    </a>
  )
}

export default HeroBottomCard