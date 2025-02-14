import Slider from "react-slick";
import './hero_slider.css'

function HeroSlider({children}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 ta slayd yonma-yon ko‘rinsin
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    vertical: false, // Vertikalni o‘chirib qo‘yish
  };
  
      
    return (<>
        <Slider {...settings}>
            {children}
        </Slider>
    </>)
}

export default HeroSlider