import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard';

function Home(){
    const url_api = `https://5f0c56409d1e150016b3807d.mockapi.io/product?page=1&limit=5`
 
     const [products, setProducts] = useState({
         loading: false,
         data:null,
         error:false
     })
 
     useEffect(() => {
        setProducts({
            loading: true, 
            data:null,
            error:false
        })
        axios.get(url_api)
                .then(response=>{
            setProducts({
                loading:false, 
                data:response.data,
                error:false
            })    
        })
        .catch(error =>{
            setProducts({
                loading:false, 
                data:null,
                error:true
            })   
        })
    }, [url_api])

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