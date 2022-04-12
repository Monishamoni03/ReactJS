import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

const App=()=>{
  const [values,setValues]=useState({
    name:"",
    account:"",
    email:"",
    mobile:"",
  });
  const fields=[
    {
      id:1,
      name:"name",
      type:"text",
      placeholder:"Enter your name",
      label:"Name",
      errorMessage:"Name should have atleast 4 characters & no special characters are included",
      //pattern:"^[a-zA-Z0-9]",
      //require:true,
    },
    {
      id:2,
      name:"account",
      type:"number",
      placeholder:"Enter your account number",
      label:"Account number",
    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Enter your email id",
      label:"Email id",
    },
    {
      id:4,
      name:"mobile",
      type:"number",
      placeholder:"Enter your mobile number",
      label:"Mobile number",
    },
  ];
  const handleSubmit=(e)=>{
    e.preventDefault();
  };
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  //const [value,setData] = useState([]);
  //const [input,setInput] = useState("");
  
  /*const handleClick=() => {
    const tempData =value;
    tempData.push(input);
    setData(value);
    setInput("");
    console.log(value);
  };*/
  return (
  <div className='App'>
    <form onSubmit={handleSubmit}>
      
    <h1>FORM</h1>
      {fields.map((input)=>(
        <FormInput 
        key={input.id} 
        {...input} 
        value={values[input.name]} 
        onChange={onChange}
         />
      ))}
     
      <button>Submit</button>
    </form>
  </div>
  );
}

export default App;