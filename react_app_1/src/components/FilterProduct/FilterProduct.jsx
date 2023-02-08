import React from 'react'
import './FilterProduct.css'

const FilterProduct = (props) => {

    function onFilterValueChange (e) {
       // console.log(e.target.value); 
        props.onFilterValueSelected(e.target.value);
    }

  return (
    <div className='filter-area col-lg-8 mx-auto p-1' style={{borderBottomRightRadius : "10px" , borderEndStartRadius: "10px"}}>
        <select name="isAvailable" id="" className='"form-select p-1' onChange={onFilterValueChange}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>
  )
}

export default FilterProduct;