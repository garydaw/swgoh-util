import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
export const LoginPage = () => {
  const [loginError, setLoginError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  

  const handleLogin = async () => {
    setLoginError("");

    const response = await fetch('http://localhost:5000/api' + '/player/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      await login({ username });
    } else {
      // Handle login failure
      const errorData = await response.json();
      setLoginError(errorData.message);
    }
  };

  /*
  const handleLogin = async (e) => {
    
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };*/

  return (
    <div className="row">
        <div className="col-4 offset-4 card d-show mt-5 pb-3">
          <h2 className="text-center mb-4">Login</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" 
                        className="form-control"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required></input>
            </div>
            <div className={loginError === "" ? "d-none" : "d-show pb-3 text-danger"}>
              {loginError}
            </div>
            <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block">Login</button>
        </div>
      </div>
  );
};

      