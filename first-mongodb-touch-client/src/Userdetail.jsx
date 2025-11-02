import React from 'react';
import { useLoaderData } from 'react-router';

const Userdetail = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>userDetail</h1>
        </div>
    );
};

export default Userdetail;