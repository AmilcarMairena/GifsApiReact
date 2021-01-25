import React from 'react'

export const GifGridItem = (  {title, url}  ) => {
    
    return (
        <div className="card animate__fadeInTopLeft">
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}
