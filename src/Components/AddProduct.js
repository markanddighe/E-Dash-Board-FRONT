import React from 'react'
import { Link } from 'react-router-dom'
import './AddProduct.css'


const AddProduct = () =>{

      const [name, setName] = React.useState('')
      const [price, setPrice] = React.useState('')
      const [category, setCategory] = React.useState('')
      const [company, setCompany] = React.useState('')
      const [error, setError] = React.useState(false)


const addProduct = async (e) =>{
  // e.preventDefault()

    if(!name || !price || !category || !company){

      setError(true)

      return false
    }else{

    }


  // console.log(name,price,category,company);

  const userId= JSON.parse(localStorage.getItem('user'))._id

  console.log(111111111111,userId._id);

  let result = await fetch("http://localhost:8000/add-product",{

        method: 'post',
        body: JSON.stringify({name,price,category,company,userId}),
        headers: {
          "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`   //auth process token bina not work

        }
  })
  result = await result.json()

  // console.log(result);
} 


    return(
        <div className="product">
            <h1 className='inputBox'>Add Product...!!</h1>

            <form>
  <div className="inputBox">
    <label for="exampleInputEmail1">Product Name</label>
    <input value={name}  onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" />
      
      { error && !name && <span className='invalid-input'>Enter Valid Name</span>}
  </div>

  <div className="inputBox">
    <label for="exampleInputPassword1">Price</label>
    <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Price" />
  
    { error && !price && <span className='invalid-input'>Enter Valid Price</span>}
  
  </div>

  <div className="inputBox">
    <label for="exampleInputPassword1">Category</label>
    <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Category" />
  
    { error && !category && <span className='invalid-input'>Enter Valid Category</span>}

  </div>

  <div className="inputBox">
    <label for="exampleInputPassword1">Product Company</label>
    <input value={company} onChange={(e)=>{setCompany(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Product Company" />
  
    { error && !company && <span className='invalid-input'>Enter Valid Company</span>}

  </div>

 {/* <button onClick={addProduct} type="submit" className="addButton">Submit</button> */}

<Link to="/"><button onClick={addProduct} type="submit" className="addButton">Submit</button></Link>

       
</form>
        </div>
    )
}

export default AddProduct