import { withRouter, useHistory } from "react-router-dom";
import { useEffect } from "react";


const parseJwt = (token) => {
    try {
        var tokenVal = token.split("Bearer ");
        tokenVal = tokenVal[1];
        var base64Url = tokenVal.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    } catch (e) {
        return null;
    }
};

const AuthVerify = (props) => {

    let history = useHistory();
    useEffect(() => {
       return props.history.listen(() => {
            console.log("In Props history funtion");
            const token = sessionStorage.getItem("token");
            if (token) {
                const decodedJwt = parseJwt(token);
                console.log(decodedJwt);
                if (decodedJwt.exp * 1000 < Date.now()) {
                    console.log("In ..........");
                    history.push('/login');
                }
            }
        });        
    });
    return <></>;
};

export default withRouter(AuthVerify);