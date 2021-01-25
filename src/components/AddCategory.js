import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories}) =>{

    const [inputValue, setinputValue] = useState('')

    const handleinputChange = (e)=>{     
        const {value} = e.target   

        setinputValue(value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        if (inputValue.trim().length > 2){
            setCategories( c => [inputValue, ...c] )
            setinputValue('')
        }
        

    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleinputChange}
            />
        </form>
    );
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;