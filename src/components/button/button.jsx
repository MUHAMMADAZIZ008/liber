import clsx from 'clsx'
import './button.css'

function Button({children, type, disabled, startIcon, endIcon, variant, className, ...props}) {
    return (<>
        <button type={type} className={clsx("py-[12px] rounded-[14px] font-bold text-[18px]", {
            'bg-[#3f51b5] px-[24px] text-white': variant === 'purple',
            'bg-[#fff] px-[24px] text-black': variant === 'white'
        }, className)} {...props}>
            <span className='flex items-center gap-[12px]'>
                <span>{startIcon}</span>
                {children}
                <span>{endIcon}</span>
            </span>
        </button>
    </>)
}

export default Button