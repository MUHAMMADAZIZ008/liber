import React from 'react'
import SectionsComponent from '../../sections-component/sections_component'
import sectionsImg1 from '../../../assets/sections_img1.png'

const data1 = [
    {
        id: 1,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 2,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 3,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 4,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 5,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 5,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    }
]

const Sections = () => {
  return (
    <div>
        <SectionsComponent main_title={'Янги қўшилганлар'} data={data1}/>
        <SectionsComponent main_title={'Аудио китоблар'} data={data1}/>
    </div>
  )
}

export default Sections