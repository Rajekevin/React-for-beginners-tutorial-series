import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'

function Product(){
   const {id} = useParams()
   const url_api = `https://5f0c56409d1e150016b3807d.mockapi.io/product/${id}`

    const [product, setProduct] = useState({
        loading: false,
        data:null,
        error:false
    })

    let content = null

    useEffect(() => {
        setProduct({
            loading: true, 
            data:null,
            error:false
        })
        axios.get(url_api)
                .then(response=>{
            setProduct({
                loading:false, 
                data:response.data,
                error:false
            })    
        })
        .catch(error =>{
            setProduct({
                loading:false, 
                data:null,
                error:true
            })   
        })
    }, [url_api])


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