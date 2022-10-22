import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username:"",
      name:"",
      email:"",
      password:"",
      reEnterPassword:""
    }
  }

  showRegister = () => {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'flex';
  }
  
  showLogin = ()=> {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registrationForm').style.display = 'none';
  }

  registerNewUser = async () => {
    const {username, name, email, password, reEnterPassword} = this.state;
    if(!username || !name || !email || !password || !reEnterPassword || (password !== reEnterPassword)) {
      let msgDiv = document.getElementById('registerAlert');
      msgDiv.style.display = 'flex';
      msgDiv.innerHTML = "Error Occured! Please enter the values correctly.";
      msgDiv.style.color = "crimson";
    }
    else {
      const res = await fetch("http://localhost:5000/register", {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({username,name,email,password})
      });

      const data = await res.json();
      let msgDiv = document.getElementById('registerAlert');
      msgDiv.innerHTML = data.message;
      msgDiv.style.display = "flex";
      if(data.type=="success") {msgDiv.style.color = "green";}
      else if(data.type=="error") {msgDiv.style.color = "crimson";}
      
      if(data.message=="Registered Successfully.") {
        setTimeout(this.showLogin,3000);
      }
    }
  }

  loginUser = async () => {
    if(this.props.user._id){
      let msgDiv = document.getElementById('loginAlert');
      msgDiv.style.display = 'flex';
      msgDiv.innerHTML = "You are already Logged In.";
      msgDiv.style.color = "green";
      return;
    }

    let email = this.state.email;
    let password = this.state.password;
    if(!email || !password) {
      let msgDiv = document.getElementById('loginAlert');
      msgDiv.style.display = 'flex';
      msgDiv.innerHTML = "Error Occured! Please enter the values correctly.";
      msgDiv.style.color = "crimson";
    }
    else {
      const res = await fetch("http://localhost:5000/login", {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      });

      const data = await res.json();
      let msgDiv = document.getElementById('loginAlert');
      msgDiv.innerHTML = data.message;
      msgDiv.style.display = "flex";
      if(data.type=="success") {msgDiv.style.color = "green";}
      else if(data.type=="error") {msgDiv.style.color = "crimson";}

      if(data.message=="Login Successfully.") {
        this.props.setUser({user:data.user});
      }
    }
  }

  render() {
    return (
      <div className="primaryContainer displayFlex" style={{ "flexDirection": "column" }}>
        <form method='POST' id="registrationForm" className="displayFlex inputForm">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="newUsername" onChange={(e)=>{return this.setState({username:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor="username">Name</label>
            <input type="text" name="newName" onChange={(e)=>{return this.setState({name:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name="newEmail" onChange={(e)=>{return this.setState({email:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="newPassword" onChange={(e)=>{return this.setState({password:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor="password">Re-Enter Password</label>
            <input type="password" name="reEnterPassword" onChange={(e)=>{return this.setState({reEnterPassword:e.target.value})}}/>
            <a href="#">Generate Random</a>
          </div>
          <div className='alertMessage' id='registerAlert' style={{justifyContent:'center',alignItems:'center',display: 'none'}}>
          </div>
          <button type="button" className='formButton' style={{ backgroundColor: "var(--primaryColor)" , color:"var(--secondaryColor)"}} onClick={()=>{return this.registerNewUser()}}>Submit</button>
          <button type="button" className='formButton' style={{ backgroundColor: "var(--secondaryColor)", color:"var(--primaryColor)" }}>Cancel</button>
          <div style={{justifyContent:'center',alignItems:'center'}}>
            <label>Already Registered?</label>
          </div>
          <button type="button" className='formButton' style={{ "backgroundColor": "	#BEBEBE" }} onClick={this.showLogin}>Login</button>
        </form>
        
        <form method='POST' id="loginForm" className="displayFlex inputForm" style={{display:'none'}}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={(e)=>{return this.setState({email: e.target.value})}}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={(e)=>{return this.setState({password: e.target.value})}}/>
            <a href="#">Forgot Password</a>
          </div>
          <div className='alertMessage' id='loginAlert' style={{justifyContent:'center',alignItems:'center',display: 'none'}}></div>
          <button type="button" className='formButton' style={{ backgroundColor: "var(--primaryColor)" , color:"var(--secondaryColor)"}} onClick={()=>{return this.loginUser()}}>Submit</button>
          <button type="button" className='formButton' style={{ backgroundColor: "var(--secondaryColor)", color:"var(--primaryColor)" }}>Cancel</button>
          <div style={{justifyContent:'center',alignItems:'center'}}>
            <label>New User?</label>
          </div>
          <button type="button" className='formButton' style={{ "backgroundColor": "	#BEBEBE" }} onClick={this.showRegister}>Register</button>
        </form>
      </div>
    )
  }
}

