import React, { use, useState } from 'react';

const User = ({data}) => {
    const datum=use(data);
    console.log(datum);

    const [dip,setDip]=useState(datum);
       const handleSubmit=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    console.log(name,email);
    const user={name,email}
    fetch('http://localhost:3000/user',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      if(data.insertedId){
         user._id= data.insertedId;
         const newUser=[...dip,user];
         setDip(newUser);
        alert('Okay man')
        e.target.reset();
      }

    });
  }
    return (
        <div>
             <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label><br />
        <input type="text" name="name" id="" /><br />
        <label htmlFor="">Email</label><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="submmit" />
      </form>

      <p>--------------------------</p>
      <div>
        {
            dip.map(d=><div key={d.id} style={{display:'flex'}}><p>{d.name} : </p><p>{d.email}</p></div>)
        }
      </div>
        </div>
    );
};

export default User;