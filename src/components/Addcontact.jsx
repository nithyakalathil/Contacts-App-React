import React, { useState } from 'react'

const Addcontact = () => {

const [data,changedata]=useState(
    {
        "firstname":"",
        "lastname":"",
        "email":"",
        "mobile":""
        
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
}

  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="label form-label">First Name</div>
<input type="text" className="form-control" name="firstname" value={data.firstname} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <div className="label form-label">Last Name</div>
    <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <div className="label form-label">Email</div>
    <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
    <div className="label form-label">Mobile No</div>
    <input type="text" className="form-control" name="mobile" value={data.mobile} onChange={inputHandler}/>
    
    </div>
   
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>

</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Addcontact