import React from "react";
import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "734109086152-t8s3b90afs2pp426et6mu98j254bjkvb.apps.googleusercontent.com";

function Login() {
  let history = useHistory();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);

    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );

    // refreshTokenSetup(res);

    //  history.push("/random");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 `);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <div onClick={signIn} className="login-button">
      <div className="icon-con">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.87 141.24">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Ebene_1" data-name="Ebene 1">
              <path
                class="cls-2"
                d="M8.15,54.79c10-6.9,32.81-40.71,60-50.18,2-.72,4-1.41,6-2,26.9-9.8,30.61,14,38.94,32.76,7.44,16.66-2.9,66.51-18.36,87.28-8,10.46-18.78,17.74-32.58,18.24-11.65.48-23.84-6.3-33.63-16.62a145.09,145.09,0,0,1-13.9-17.09C-2,81.46-4.1,62,8.15,54.79Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <h3 className="buttonText">Login</h3>
    </div>
  );
}

export default Login;
