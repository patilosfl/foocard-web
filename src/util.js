export const getUserName = () => {
    const userName = sessionStorage.getItem('name');
    if (userName) {
        return userName;
    }
    return null;
}
export const isValidSession = () => {
    const tokenValue = sessionStorage.getItem('token');
    
    if (!tokenValue) {
        return null;
    }

    try {
        let base64Url = tokenValue.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let decodedData = JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
        console.log(decodedData);
        if (decodedData.exp * 1000 < Date.now()) {
            console.log("Invalid user session");
            return false;
        } else {
            console.log("valid user session");
            return true;
        }

    } catch (e) {
        return null;
    }
};

export const parseJwt = (token) => {
    try {
        var a = Buffer.from(token, 'base64');
        console.log(a);
        var b = a.split(".")[1];
        console.log(b);
        return b;
    } catch (e) {
        return null;
    }
};

export const API = async (url, body, method) => {

    const tokenValue = sessionStorage.getItem("token");
    const headers = {
        'Authorization': tokenValue,
        'Access-Control-Allow-Origin': '*'
    };

    if (!tokenValue) {
        console.log("Token is not present");
    }

    if (body) {

        if (!url.indexOf("authenticate")) {
            console.log("Not a login method");
        }

        return fetch("http://localhost:8080/" + url, {
            method: 'post',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'access-control-allow-credentials': true
            }
        }).catch(error => {
            console.error(error);
        });
    }
    else {
        return fetch("http://localhost:8080/" + url, {
            headers: headers,
            mode: 'cors'
        }).catch(error => {
            console.error("There is error in request!");
            console.error(error);
        });
    }

}
