import React, {useState, useEffect} from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import {useAxiosGet} from '../Hooks/HttpRequest'

function Home(){
    const url_api = `https://5f0c56409d1e150016b3807d.mockapi.io/product?page=1&limit=5`
 
    let products = useAxiosGet(url_api)

    let content = null

    if(products.error){
        content= <p> There was an error please refresh or try again later</p>
    }

    if(products.loading){
        content= <p> <Loader></Loader></p>
    }

    if(products.data){
        content =
        products.data.map((product, key)=> 
        <div key={key}>
              <ProductCard
                product={product}
              
              />
        </div>
        )
     }

    return(
        <div>
             <h1 className="font-bold text-2xl">
                Best Sellers
                </h1>
                {content}
        
             {/* <HelloWorld name="Kevin" /> */}
        </div>    
    )
}
export default Home