import React, { useEffect } from "react";
import './AddProduct.css'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";


const UpdateProduct = () =>{

    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [company, setCompany] = React.useState('')
    const params= useParams()

    useEffect(()=>{
      // console.log(params);
      getProductDetails()
    },[])



    const getProductDetails = async ()=>{
      // console.log(params);
      let result = await fetch(`http://localhost:8000/product/${params.id}`,{

      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`       //auth process token bina not work
      }
      })

      result= await result.json()

      // console.log(result);
      setName(result.name)
      setPrice(result.price)
      setCategory(result.category)
      setCompany(result.company)
    }
    
    

    const updateProduct = async (e) =>{

        // e.preventDefault()
      
        // console.log(name,price,category,company);

        let result = fetch(`http://localhost:8000/product/${params.id}`,{

        method:'put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
          'Content-Type':"application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`      //auth process token bina not work

        }
        })
        result = await result.json()

        // console.log(result);
    }

    return(

        <div className="product">
            <h1 className='inputBox'>Update Product...!!</h1>

            <form>
  <div className="inputBox">
    <label for="exampleInputEmail1">Product Name</label>
    <input value={name}  onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" />
      
  </div>

  <div className="inputBox">
    <label for="exampleInputPassword1">Price</label>
    <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Price" />
  
  
  </div>

  <div className="inputBox">
    <label for="exampleInputPassword1">Category</label>
    <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Category" />
  

  </div>

  <div className="inputBox">
    <label for="exampleInputPassword1">Product Company</label>
    <input value={company} onChange={(e)=>{setCompany(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Product Company" />
  

  </div>

  <Link to="/"><button onClick={updateProduct} type="submit" className="addButton">Update</button></Link>

{/* <Link to="/"><button onClick={addProduct} type="submit" className="addButton">Submit</button></Link> */}

       
</form>
        </div>
    )
}

export default UpdateProduct