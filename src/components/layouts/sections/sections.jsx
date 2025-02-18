import React from 'react'
import SectionsComponent from '../../sections-component/sections_component'
import sectionsImg1 from '../../../assets/sections_img1.png'

export const data1 = [
    {
        id: 1,
        title: '1984',
        type: 'SIYOSAT, FANTASTIKA',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 2,
        title: 'Hayvonot bogʻi',
        type: 'SATIRA, SIYOSAT',
        rating: 4.5,
        img: sectionsImg1
    },
    {
        id: 3,
        title: 'Don Kixot',
        type: 'KLASSIKA, SARGUZASHT',
        rating: 4.8,
        img: sectionsImg1
    },
    {
        id: 4,
        title: 'Qo‘rqinchli dunyo',
        type: 'FANTASTIKA, DISTOPIYA',
        rating: 4.6,
        img: sectionsImg1
    },
    {
        id: 5,
        title: 'Sherlok Xolms sarguzashtlari',
        type: 'DETEKTIV, SARGUZASHT',
        rating: 4.9,
        img: sectionsImg1
    },
    {
        id: 6,
        title: 'Uch mushketyor',
        type: 'TARIXIY, SARGUZASHT',
        rating: 4.7,
        img: sectionsImg1
    }
];

export const data2 = [
    {
        id: 7,
        title: 'Urush va tinchlik',
        type: 'TARIXIY, DRAMA',
        rating: 4.8,
        img: sectionsImg1
    },
    {
        id: 8,
        title: 'Odamlar',
        type: 'PSIXOLOGIYA, DRAMA',
        rating: 4.5,
        img: sectionsImg1
    },
    {
        id: 9,
        title: 'Moby-Dik',
        type: 'KLASSIKA, SARGUZASHT',
        rating: 4.6,
        img: sectionsImg1
    },
    {
        id: 10,
        title: 'Qora tuynuk',
        type: 'FANTASTIKA, ILMIY',
        rating: 4.7,
        img: sectionsImg1
    },
    {
        id: 11,
        title: 'Mening ismim Qizil',
        type: 'TARIXIY, SARGUZASHT',
        rating: 4.6,
        img: sectionsImg1
    },
    {
        id: 12,
        title: 'Dunyo sirlari',
        type: 'FANTASTIKA, ILMIY',
        rating: 4.7,
        img: sectionsImg1
    }
];

const Sections = () => {
  return (
    <div>
        <SectionsComponent main_title={'Янги қўшилганлар'} data={data1}/>
        <SectionsComponent main_title={'Аудио китоблар'} data={data2}/>
    </div>
  )
}

export default Sections