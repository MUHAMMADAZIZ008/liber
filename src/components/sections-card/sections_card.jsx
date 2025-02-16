import React from 'react'
import star from '../../assets/star.svg'
import handPhone from '../../assets/hand_phone.svg'
import bookIcon from '../../assets/book_icon.svg'

const SectionsCard = ({title, type, img, rating}) => {
  return (
    <div>
        <div className='mb-[18px]'>
            <img src={img} alt="img" />
        </div>
        <h3 className='text-left font-bold text-[20px]'>{title}</h3>
        <a className=' text-left block mb-[16px] text-[14px] text-[#3f51b5]' href="#">{type}</a>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
                <img src={star} alt="star icon" />
                <p className='text-[#ff7f4d]'>{rating}</p>
            </div>
            <div className='flex items-center gap-[16px]'>
                <a href="#">
                    <img src={handPhone} alt="" />
                </a>
                <a href="#">
                    <img src={bookIcon} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default SectionsCard