import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequest';

function Product(){
   const {id} = useParams()
   const url_api = `https://5f0c56409d1e150016b3807d.mockapi.io/product/${id}`

    let product = useAxiosGet(url_api)
    let content = null

    if(product.error){
        content= <p> There was an error please refresh or try again later</p>
    }

    if(product.loading){
        content= <p> <Loader></Loader></p>
    }

    if(product.data){
       content =
       <div>
            <h1 className="text-2xl font-bold mb-3">
                <h1>{product.data.name}</h1>
            </h1>
            <div>
                <img src={product.data.avatar} alt={product.data.name} />
            </div>
             
        </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Product