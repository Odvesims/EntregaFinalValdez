import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useState } from 'react';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSignUp = async () => {};

  return (
    <div>
      <div className="row">
        <input
          className="form-control"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="row">
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="row">
        <input
          className="form-control"
          placeholder="Confirm"
          type="password"
          onChange={(e) => setConfirmation(e.target.value)}
        ></input>
      </div>
      <div className="row">
        <button className="btn btn-primary" onclick={handleSignUp} />
      </div>
    </div>
  );
};

export default SignUp;
