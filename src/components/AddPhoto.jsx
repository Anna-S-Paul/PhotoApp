import React, { useState } from 'react'
import NavPhoto from './NavPhoto'
import axios from 'axios'

const AddPhoto = () => {
    const [data,setData]=useState(
{
"photoid":"",
"name":"",
"stospa":"",
"photo":""

}
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8086/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavPhoto/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Photo ID:</label>
<input type="text" name="photoid" id="" className="form-control" value={data.photoid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label"> Name:</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Storage space:</label>
<input type="text" className="form-control" name='stospa' value={data.stospa} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Photo:</label>
<input type="text" name="photo" id="" className="form-control" value={data.photo} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-success" onClick={readValue}>Upload</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPhoto