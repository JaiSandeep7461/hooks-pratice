import { useActionState } from "react";
import { loginUser } from "../api/user";

const Login = () =>{

    const [user,submitAction,isPending] =  useActionState(login,{
        data:null,
        error:null
    });


      async function login(prevState,formData){

        const username = formData.get("username");
        const password = formData.get("password");

        try {
            const response = await loginUser(username,password);
            return {data:response.data,error:null}
        } catch (error) {
         return {data:null,error:error.error};
        }
    }



    return (
        <form action={submitAction}>
        <div>
            <label>Username:</label>
            <input name="username" type="text" required/>
        </div>
        <div>
            <label>Password:</label>
            <input name="password" type="password"  required/>
        </div>
        <button type="submit" disabled={isPending}>{isPending ? "Logging in...":"Login"}</button>
        {user?.data && <p style={{color:"green"}}>Logged in: {user.data.email}</p>}
        {user.error && <p style={{color:"red"}}>{user.error}</p>}
        </form>
    )
}

export default Login;