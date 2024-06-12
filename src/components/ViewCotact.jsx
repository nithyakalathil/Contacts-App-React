import React, { useState } from 'react'

const ViewCotact = () => {

const [data,changedata]=useState(
    [

        {
"firstname":"nithya",
        "lastname":"k",
        "email":"ni@gmail.com",
        "mobile":"9876543456"
            
        }
    ]
)

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
    </tr>
  </thead>
  <tbody>
    {data.map((value,index)=>{
        return  <tr>
        <th scope="row">{value.firstname}</th>
        <td>{value.lastname}</td>
        <td>{value.email}</td>
        <td>{value.mobile}</td>
      </tr>})}
   
  </tbody>
</table>


        </div>
    </div>
</div>


    </div>
  )
}

export default ViewCotact