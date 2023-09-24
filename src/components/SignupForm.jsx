import { useState } from "react";
import { addNewUser, checkIfLoggedIn, completePostSignin } from "../javascript/api";
import Cookies from "js-cookie";

export default function SignUpForm({setSignUpFormSelected, setIsLoggedIn}) {
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await addNewUser(userName, passWord);
            console.log(response);
            if (response.data != null) {
                Cookies.set(`loginToken`, response.data.token, { expires: 7 });
                alert(response.data.message);
                setIsLoggedIn(true);
            }
            else {
                alert(response.error.message);
                setError(response.error.message);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    function switchToSignin() {
        setSignUpFormSelected(false);
    }

    return <>
        <h2>Please sign up!</h2>
        {error != null && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "}
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <label>
                Password:{" "}
                <input
                    type="password"
                    value={passWord}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button>Submit</button>
        </form>
        <form onSubmit={switchToSignin}>
            <label>Already have an account?</label><button>Sign in!</button>
        </form>
    </>
}