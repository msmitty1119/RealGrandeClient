import {Link, useNavigate} from 'react-router-dom';
const Header = () => {    
    let navigate = useNavigate();


    let logoutHandler = () => {
        // localStorage.clear();
        sessionStorage.clear();
        navigate('/')
    }


    let loginHandler = () =>{
        navigate('/login');
    }


    let signUpHandler = () =>{
        navigate('/signup');
    }
     return (
            <div className="row bg-warning d-flex align-items-center">
                <div className="col-sm-3">
                   <Link to="/">  <img className="logo" src="/imgs/logo.png" alt="logo here"/> </Link>
                </div>
                <div className="col-sm-5">
                    <p className="m-0 tagline"> Your real estate destination!</p>
                </div>
                <div className="col-sm-4">
                    {
                    // (localStorage.getItem('custname')) ?
                    (sessionStorage.getItem('custname')) ?
                        <>
                            {/* <h6> Welcome { localStorage.getItem('custname') }! </h6> */}
                            <h6> Welcome { sessionStorage.getItem('custname') }! </h6>
                            <button onClick={logoutHandler} className="btn btn-danger mx-3"> Logout </button>
                        </>
                      :
                        <>
                            <button className="btn btn-primary mx-3" onClick={loginHandler}> Login</button>
                            <button className="btn btn-success" onClick={signUpHandler}> SignUp </button>
                        </>
                    }
                     </div>
               
            {/* <h1 className="bg-warning"> Header!</h1>  */}
            </div> );
}
export default Header;;
