import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ Category }) =>{

   const {data:images, loading} = useFetchGifs(Category);



    return (
        <>
        <h2>{ Category }</h2>
        <p className="animate__bounceOut">{ loading && 'Cargando'}</p>
        <div className='card-grid'>                          
                {images.map(row =>(
                   <GifGridItem
                    key={row.id}
                    {...row}
                    />
                ))}        
        </div>  
        </>        
    );
}