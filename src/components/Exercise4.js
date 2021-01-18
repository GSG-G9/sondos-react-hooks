import React, {useState} from 'react'

export default function Exercise4() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmedPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!email || !password || !confirmedPassword){
      setError('Please, enter your email and password')
    } else if ( password !== confirmedPassword){
      setError('Passwords are not matched')

    }
    else{
      event.target.elements[0].value = "";
      event.target.elements[1].value = "";
      event.target.elements[2].value = "";
      setError('');
      setSubmitted(true);
    }
  }

  const deleteForm = () => {
    setEmail('');
    setPassword('');
    setConfirmedPassword('');
    setSubmitted(false);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p>Sign up</p>
        <input disabled={submitted} type="email" placeholder="Enter your email" onChange={handleEmail}></input>
        <input disabled={submitted} type="password" placeholder="enter your password" onChange={handlePassword}></input>
        <input disabled={submitted} type="password" placeholder="confirm your password" onChange={handleConfirmPassword}></input>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p> }
      {submitted &&
      <>
       <p>Your submitted data</p>
      <p> email: {email}</p>
      <p>password: {password}</p>
      <button onClick={deleteForm}>delete</button>
      </>}
    </div>
  )
}
