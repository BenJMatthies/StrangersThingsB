import { useState } from "react";
import SignUpForm from "./components/SignupForm";
import { checkIfLoggedIn } from "./javascript/api";
import PostLogin from "./components/PostLogin";
import LoginForm from "./components/LoginForm";
import Cookies from "js-cookie";

export default function UserLanding() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());
    const [signUpFormSelected, setSignUpFormSelected] = useState(false);
    // const [loginFormVisible, setLoginFormVisible] = useState(true);
    // const [signupFormVisible, setSignupFormVisible] = useState(false);
    // const [loggedInVisible, setLoggedInVisible] = useState(false);
    // console.log(isLoggedIn);
    // const cookieTest = Cookies.get("loginToken");
    // console.log(`Login Token: ${cookieTest}`)



    function renderVisibleForm() {
        if (isLoggedIn) {
            return <div className="loginMain">
                <div className="loginComponent">
                    <PostLogin />
                </div>
            </div>
        }
        else if (signUpFormSelected) {
            return <div className="loginMain">
                <div className="loginComponent">
                    <SignUpForm setSignUpFormSelected={setSignUpFormSelected} setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
        }
        else {
            return <div className="loginMain">
                <div className="loginComponent">
                    <LoginForm setSignUpFormSelected={setSignUpFormSelected} setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
        }
    }

    return renderVisibleForm();

    // if (loginFormVisible) {
    //     return <div className="loginMain">
    //         <div className="loginComponent">
    //             <LoginForm setLoginFormVisible={setLoginFormVisible} setSignupFormVisible={setSignupFormVisible} setLoggedInVisible={setLoggedInVisible} />
    //         </div>
    //     </div>
    // }
    // if (signupFormVisible) {

    // } if (loggedInVisible) {
    //     return <div className="loginMain">
    //         <div className="loginComponent">
    //             <LoggedIn />
    //         </div>
    //     </div>
    // }


    // if (isLoggedIn) {
    //     return <>
    //         <LoggedIn />
    //     </>
    // }
    // return <LoginForm />

    // return <SignUpForm />;
}
