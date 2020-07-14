import React,{useEffect, useState} from 'react'
import axios from 'axios'


export function useAxiosGet(url_api){

    const [request, setRequest] = useState({
        loading: false,
        data:null,
        error:false
    })

    useEffect(() => {
        setRequest({
            loading: true, 
            data:null,
            error:false
        })
        axios.get(url_api)
                .then(response=>{
            setRequest({
                loading:false, 
                data:response.data,
                error:false
            })    
        })
        .catch(error =>{
            setRequest({
                loading:false, 
                data:null,
                error:true
            })   
        })
    }, [url_api])

    return request
}

