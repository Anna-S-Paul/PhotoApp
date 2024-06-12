import React, { useEffect, useState } from 'react'
import NavPhoto from './NavPhoto'
import axios from 'axios'

const ViewPhoto = () => {
    const [data,setData] = useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8086/viewall").then(
(response)=>{
    setData(response.data)
}
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
        <div>
            <NavPhoto />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.photo} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.photoid}</h5>
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.stospa}</p>
                                                
                                                <a href="#" class="btn btn-primary">upload</a>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPhoto