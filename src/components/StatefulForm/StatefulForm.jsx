import { useState } from "react";


const StatefulForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('Password must be 6 characters or longer')
    }else{
      setError('');
      console.log(name, email, password);
    }
   
    
  }

  const handleNameChange = e =>{
    console.log(e.target.value);
    setName(e.target.value)
  }
  const handleEmailChange = e =>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" 
            onChange={handleNameChange}
          />
          <br />
          <input type="email" name="email" 
          onChange={handleEmailChange}
          />
          <br />
          <input type="password" name="password" 
          onChange={handlePasswordChange}
          />
          <br />
          <input type="submit" value="Submit" />
          {
            error && <p>{error}</p>
          }
        </form>
      
    </div>
    
  );
};

export default StatefulForm;