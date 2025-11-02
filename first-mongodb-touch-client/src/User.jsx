import React, { use, useState } from 'react';
import { Link } from 'react-router';

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

  const handleClick=(id)=>{
    fetch(`http://localhost:3000/user/${id}`,{
        method:'DELETE'
    }).then(res=>res.json()).then(data=>{console.log(data)
        const remaining=dip.filter(f=>f._id != id);
        setDip(remaining)
    });
    console.log("userId",id);
  }
    return (
        <div>
            <h1>{dip.length}</h1>
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
            dip.map(d=><div key={d._id} style={{display:'flex ' ,marginLeft:'20px'}}><p>{d.name} : </p><p>{d.email}</p> <Link to={`/user/${d._id}`}><p>detail</p> </Link> <Link to={`/update/${d._id}`}><p>  update</p></Link><button onClick={()=>handleClick(d._id)}>x</button>  </div>)
        }
      </div>
        </div>
    );
};

export default User;