import React from "react";
import img from './logo.png';
import './style.css';
const Login = () => {
    return (
        <>
            <navbar class="navbar navbar-expand  navbar-primary bg-gray">
                <div class="col-md-2">
                    <img src={img} style={{ width: "135px", height: "55px" }}></img>
                </div>
                <div class="col-md-5"></div>
                <div class="col-md-5">
                    <a href="#">Skill Test</a>
                    &nbsp;
                    &nbsp;
                    <a href="#">Premium Service</a>
                    &nbsp;
                    &nbsp;
                    <a href="#">Resume Builder</a>
                    &nbsp;
                    &nbsp;
                    <a>|</a>
                    &nbsp;
                    &nbsp;
                    <a href="#">Login</a>
                    &nbsp;
                    &nbsp;
                    <a href="#">Register</a>
                    &nbsp;
                    &nbsp;
                    <a href="#">Employee Login</a>
                    &nbsp;
                    &nbsp;
                </div>
            </navbar>

            <div className="card" style={{ marginTop: "50px" }}>
                <div className="row">
                    <div className="col-md-2"> </div>

                    <div className="card col-md-8">
                        <div style={{ background: "linear-gradient(90deg, rgba(57,49,175,1) 27%, rgba(0,198,255,1) 91%)", height: "500px" }}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="card-body">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <center>
                                            <h1 style={{ color: 'white' }}>Welcome To <br />CIITCoder</h1><br />
                                            <br />
                                            <h6 style={{ color: 'white' }}>You are already registered?<br />then click here to login!</h6>
                                            <br />
                                            <br />
                                            <input class="but1"type="button" value={"Login"} /></center>
                                    </div>
                                </div>

                                <div className="card col-md-7" id="cardx" style={{ marginTop: "20px" }}>
                                    <div class="card-header">
                                    <ul class="nav nav-tabs ">
                                            &nbsp;
                                            &nbsp;
                                            <li><a class="switch" href="#" style={{textDecoration:"none"}}>Register</a></li>
                                            &nbsp;
                                            &nbsp;
                                            <li><a href="#" class="switch1">Login</a></li>
                                        </ul>
                                        <br />
                                        <br />
                                        <center><h3 style={{color:"gray"}}>Login As User</h3></center>
                                    </div>
                                    <div class="card-body">
                                        
                                        <div className="red-text">
                                        <center>
                                            <h5>User account has been created Successfully. Please<br></br> check your email for login credentials.</h5>
                                        </center>
                                        </div>
                                        <br />
                                        <h6 style={{textIndent:"75px"}}>Email Address</h6>
                                        <center><input className="input-textbox" type="text" placeholder="Username *" size={"200px"} /></center>
                                        &nbsp;
                                        <h6 style={{textIndent:"75px"}}>Password</h6>
                                        <center><input className="input-textbox" type="text" placeholder="Password *" size={"200px"} /></center>
                                    </div>
                                    <div class="card-footer">
                                        <center><input id="but" type="button" value={"login"} /></center>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-1"></div>
                </div>

                <h6 id="copyright">© 2023 - CIITCoderApp -<a href="#"> Privacy</a></h6>

            </div>
        </>
    )
}
export default Login;
