import React from "react";
import img from './logo.png';
import './style.css';
import Login from "./Loginform";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Registration = () => {
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
                        <div style={{ background: "linear-gradient(90deg, rgba(57,49,175,1) 27%, rgba(0,198,255,1) 91%)", height: "600px" }}>
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
                                            <input class="but1" type="button" value={"Login"} /></center>
                                    </div>
                                </div>

                                <div className="card col-md-7" id="cardx" style={{ marginTop: "20px", height: "550px" }} >
                                    <div class="card-header">
                                        <Router>
                                            <div>
                                                <ul class="nav nav-tabs ">
                                                    &nbsp;
                                                    &nbsp;
                                                    <li><a class="switch1" href="#">Register</a></li>
                                                    &nbsp;
                                                    &nbsp;
                                                    <li><Link to={"/Login"}><a href="/Login" class="switch" onClick={()=>Login()}>Login</a></Link></li>
                                            </ul>
                                    </div>
                                    <div>
                                        <Routes>
                                            <Route path="/Login">Login</Route>
                                            </Routes>
                                    </div>
                                </Router>
                                <br />
                                <br />
                                <center><h3 style={{ color: "gray" }}>Register As User</h3></center>
                            </div>
                            <div class="card-body">
                                <h5 style={{ color: "hsl(240, 100%, 34%)", fontSize: "15px", fontWeight: "bold" }}>User account has been created Successfully. Please check your email for login credentials.</h5>
                                <br />
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Username</h6>
                                        <input type="text" placeholder="Username *" size={"200px"} style={{ textAlign:"center",width: "200px", height: "30px" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Gender</h6>
                                        <input type="radio" name="Gender" value="Male" /> Male
                                        &nbsp;
                                        <input type="radio" name="Gender" value="Female" />Female
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6" style={{ marginTop: "25px" }} >
                                            <h6>Birth Date</h6>
                                            <input type="date" size={"200px"} style={{ width: "200px", height: "30px" }} />
                                        </div>
                                        <div className="col-md-6" style={{ marginTop: "25px" }}>
                                            <h6>Email Address</h6>
                                            <input type="text" placeholder="email address *" size={"200px"} style={{ width: "200px", height: "30px" }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6" style={{ marginTop: "25px" }} >
                                            <h6>Mobile Number</h6>
                                            <input type="text" placeholder="mobile number *" size={"200px"} style={{ width: "200px", height: "30px" }} />
                                        </div>
                                        <div className="col-md-6" style={{ marginTop: "25px" }}>
                                            <h6>Qualification</h6>
                                            <input type="text" placeholder="qualification *" size={"200px"} style={{ width: "200px", height: "30px" }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6" style={{ marginBottom: "25px", marginLeft: "350px" }} >
                                <input id="regbut" type="button" value={"Register"} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div >

            <h6 id="copyright">© 2023 - CIITCoderApp -<a href="#"> Privacy</a></h6>

            </div >
        </>
    )
}
export default Registration;  
