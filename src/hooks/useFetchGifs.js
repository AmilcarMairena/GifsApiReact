import React, {useEffect, useState} from 'react'
import { getGif } from '../helpers/getGifs'


export const useFetchGifs = ( Category )=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        getGif( Category )
        .then( img => {
            setState({
                data:img,
                loading:false
            })
        })
    }, [ Category])

    return state;
}