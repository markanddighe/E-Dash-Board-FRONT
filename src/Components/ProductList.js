import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './ProductList.css'


const ProductList = () =>{
  
  const [products, setProducts] = useState([])

    
    useEffect(()=>{

        getProducts()
    },[])

    const getProducts = async () =>{

        let result= await fetch("http://localhost:8000/products",{

          headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
    
            result= await result.json()

            setProducts(result)
    }
    // console.log("product",products);


    const deleteProduct = async (id)=>{

      // console.log(id);
      
      let result = await fetch(`http://localhost:8000/product/${id}`,{

      method:"delete",
      
      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }

      })

       result = await result.json()

       if(result){
        getProducts()

       }
      }

      const searchHandle = async (event) =>{

        // console.log(event.target.value);
        let Key = event.target.value

        if(Key) {
          let result = await fetch(`http://localhost:8000/search/${Key}`,{

          headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
          })

          result= await result.json()
  
          if(result){
            setProducts(result)
          }

        } else {
          getProducts()
        }

    
      
      }

    return(
        <div className='product-list'>

        {/* <h1> Product List</h1> */}

        <div className="input-group search">
  <div className="form-outline search">
    <input onChange={searchHandle}  type="search" placeholder='enter search list' id="form1" className="form-control" />
  </div>

  </div>
       
<table className='table table-striped table-dark'>
  <thead>
    <tr className='table-primary'>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Company</th>
      <th scope="col">Actions</th>
      <th scope="col"></th>

    </tr>
  </thead>
  
  
  <tbody>
  {

  products.length>0 ?  products.map((item, index)=>
  
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.category}</td>
      <td>{item.company}</td>
      <td><button onClick={()=>deleteProduct(item._id)} type="button" className="btn btn-danger">Delete</button></td>
      {/* <td><button type="button" className="btn btn-warning">Update</button></td> */}

{/* <td><button type="button" className="btn btn-danger"><Link to="/update">Update</Link></button></td> */}

<td><Link to={"/update/" + item._id}><button type="button" className="btn btn-danger">Update</button></Link></td>



    </tr>
    )
:<h1>No product found</h1>
    
  }
  </tbody>
</table>
        </div>
    )
}

export default ProductList
