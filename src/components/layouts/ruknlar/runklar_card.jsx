import React from 'react'

const RunklarCard = ({title, img}) => {
  return (
    <div className='relative pl-[0px] pr-[18px] pb-[10px] pt-[127px] rounded-[14px] overflow-hidden'>
        <img className='absolute top-0 bottom-0 left-0 right-0 -z-10' src={img} alt="img" />
        <h3 className='text-[18px] m-0 text-white w-auto'>{title}</h3>
    </div>
  )
}

export default RunklarCard