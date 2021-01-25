import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () =>{

    // const categories = ['One punch', 'Dragon Ball', 'Samurai X']
    const [categories, setCategories] = useState(['One punch'])

    // const handleAddCategories = (e) =>{
    //     e.preventDefault()
    //     // setCategories(c => [...c, 'HunterXhunter'])
    //     setCategories([...categories, 'HunterXhunter'])
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />       
            <ol>
                { 
                    categories.map(x => (                        
                        <GifGrid
                            key={x}
                            Category={x} 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;