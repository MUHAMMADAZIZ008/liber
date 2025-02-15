import React from 'react'

const SelectCategory = () => {
  return <>
    <select name="category" className='appearance-none outline-none border-none'>
      <option value="clothes">Clothes</option>
      <option value="vegetable">Vegetable</option>
      <option value="fruits">Fruits</option>
    </select>
  </>
}

export default SelectCategory