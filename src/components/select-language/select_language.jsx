import React from 'react'
// import UzbFlag from '../../assets/uzb_flag.svg'


const Select_language = ({className}) => {
  return (<>
    <select name="language" className={className}>
        <option value="uz">Ўз</option>
        <option value="uz">Ру</option>
    </select>
  </>)
}

export default Select_language