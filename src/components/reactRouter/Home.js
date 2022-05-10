import React from "react";
import  { useParams } from 'react-router-dom';

function Home() {
    let { name } = useParams();
    return <div>Welcome to home page</div>
}

export default Home;