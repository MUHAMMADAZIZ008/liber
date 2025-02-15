import React from 'react'
import Button from '../../button/button'
import Heart from '../../../assets/icon/heart'
import bg1 from '../../../assets/hero_bg.svg'
import HeroSlider from '../../hero-slider/hero_slider'
import HeroBottomCard from '../../hero_bottom/hero_bottom_card'
import HeroBottomImg1 from '../../../assets/hero_bottom_img1.svg'

const data = [
    {
        id: 1,
        title: 'Тезкор етказиш',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        img: HeroBottomImg1,
    },
    {
        id: 2,
        title: 'Тўлов химояси',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        img: HeroBottomImg1,
    },
    {
        id: 3,
        title: 'Юқори сифат',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        img: HeroBottomImg1,
    },
    {
        id: 4,
        title: 'Энг сара китоблар',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        img: HeroBottomImg1,
    }
]


const Hero = () => {
  return (<>
    <section className='pt-[16px] pb-[56px]'>
        <div className="container">
            <div className='grid grid-cols-[80%_20%] gap-[24px]'>
                <div className='hero__bg--box flex items-center gap-[48px] px-[32px] pt-[33px] pb-[16px] rounded-[12px] bg-[#eef4ff] grow'>
                    <div className='shrink-0 h-[100%] flex items-start'>
                        <h2 className='font-bold text-[24px] text-[#242424]'>Кўп ўқилаётганлар</h2>
                    </div>
                    <HeroSlider />
                </div>
                <div className="w-[261px] rounded-[12px] bg-[#3f51b5] px-[24px] pt-[32px] pb-[38px]">
                    <h3 className='text-white font-bold text-[22px] mb-[24px]'>Китоб ўқишни ёқтирасизми?</h3>
                    <p className='text-[18px] text-white mb-[60px]'>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                    <Button variant={'white'} className={'ml-auto mr-auto'} startIcon={<Heart />}>
                        Обуна бўлиш
                    </Button>
                </div>
            </div>
        </div>
    </section>
    <section className='pb-[40px]'>
        <div className="container">
            <div className="flex">
                {data.map(item => (
                    <HeroBottomCard img={item.img} title={item.title} info={item.info}/>
                ))}
            </div>
        </div>
    </section>
  </>)
}

export default Hero