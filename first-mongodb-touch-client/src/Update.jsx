
import { useLoaderData } from 'react-router';

const Update = () => {
 const data=useLoaderData();
 console.log(data);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        console.log(name,email);
        const user={name,email}
        fetch( `http://localhost:3000/user/${data._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>console.log(data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label><br />
                <input type="text" name="name" id="" />
                <br /><label htmlFor="">Email</label>
                <input type="email" name='email' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Update;