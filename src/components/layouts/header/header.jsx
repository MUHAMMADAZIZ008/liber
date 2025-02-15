import Logo from '../../../assets/logo.svg'
import CategoryIcon from '../../../assets/category_icon.svg'
import CategoryIcon2 from '../../../assets/category_icon2.svg'
import SearchIcon from '../../../assets/search_icon.svg'
import UzbFlag from '../../../assets/uzb_flag.svg'
import LoginIcon from '../../../assets/login_icon.svg'

// Components
import Button from '../../button/button'
import SelectCategory from '../../select-category/select_category'
import Select_language from '../../select-language/select_language'
import UserIcon from '../../../assets/icon/user-icon'


// css
// import './header.css'


function Header() {
    return (<>
        <header className='py-[22px]'>
            <div className="container">
                <div className="header__inner flex items-center gap-[64px]">
                    <div className='flex items-center gap-[46px] w-[80%]'>
                        <a href="#" className="header__logo--link">
                            <img src={Logo} alt="site logo" />
                        </a>
                        <div className=' flex gap-[4px] items-center w-[80%]'>
                            <div className='cursor-pointer relative text-[#3f51b5] font-semibold outline-none border border-[#e1e1e1] rounded-tl-[14px] rounded-bl-[14px] appearance-none py-[12px] pl-[60px] pr-[19px]'>
                                <img className='absolute  left-3.5' src={CategoryIcon} alt="icon" />
                                <SelectCategory />
                                <img className='absolute bottom-[30%] right-3' src={CategoryIcon2} alt="icon" />
                            </div>
                            <div className='w-[80%] flex'>
                                <input placeholder='Қидириш' type="text" className='border border-[#e1e1e1] py-[12px] pl-[29px] w-[90%]'/>
                                <button className='flex items-center justify-center grow-1 rounded-br-[14px] rounded-tr-[14px] border border-[#e1e1e1] border-l-0'>
                                    <img src={SearchIcon} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-[24px]'>
                        <div className='relative w-[105px] flex items-center justify-between py-[14px] px-[16px] rounded-[14px] bg-[#eef4ff]'>
                            <img className='' src={UzbFlag} alt="lag" />
                            <Select_language className={'appearance-none text-[#3f51b5] font-bold text-center outline-none w-[50px]'}/>
                            <img src={CategoryIcon2} alt="" />
                        </div>
                        <Button startIcon={<UserIcon />} variant={'purple'}>
                            Кириш
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    </>)
}

export default Header