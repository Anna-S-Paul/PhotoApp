import React from 'react'
import NavPhoto from './NavPhoto'

const SearchPhoto = () => {
  return (
    <div>
        <NavPhoto/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Photo ID:</label>
                    <input type="number" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn info">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPhoto