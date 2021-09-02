import { Formik } from "formik";
import Sign from "./signup.png";

const SignUp  = () =>{

    const signupform = {
        fullname : '',
        email:'',
        username:'',
        password:''

    }

    const formSubmit = (values) => {
        console.log(values);
    }

    return<div className="container-fluid">
        <h1>SignUp Page</h1>
        <div className="row" style={{height:"100vh"}}>
            <div className="col-md-7">
                <img className="img-fluid" src={Sign}/>
            </div>
            <div className="col-md-5" style={{height:"100vh"}}>
                <div style={{backgroundColor:"gray", padding:"3rem"}}>
                <Formik
                    initialValues={signupform}
                    onSubmit={formSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                    <h3>Join Our Family</h3>
                    <label className="mt-3">Full Name</label>
                    <input className="form-control" id="fullname" onChange={handleChange} value={values.fullname}/>

                    <label className="mt-3">Email Address</label>
                    <input className="form-control" id="email" onChange={handleChange} value={values.email}/>

                    <label className="mt-3">Username</label>
                    <input className="form-control" id="username" onChange={handleChange} value={values.username}/>

                    <label className="mt-3">Password</label>
                    <input className="form-control" id="password" onChange={handleChange} value={values.password}/>
                
                    <button type="submit" className="btn btn-primary w-100 mt-5">Submit</button>
                </form>
                        ) }

                </Formik>
                
                </div>
            </div>
            </div> 



    </div>
}

export default SignUp;