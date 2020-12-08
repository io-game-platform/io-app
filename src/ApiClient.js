const siteName = "https://io.binaryaura.net/api";

class ApiClient {

    static get(route) {
        const url = `${siteName}${route}`
        return fetch(url, {
            method: 'GET',
            headers: headers()
        }).then(responseHandler());
    }

    static post(route, body) {
        const url = `${siteName}${route}`
        return fetch(url, {
            method: 'POST',
            headers: headers(),
            body: body ? JSON.stringify(body) : undefined
        }).then(responseHandler(url));
    }

}

function headers() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

function responseHandler() {
    return async (resp) => {
        const text = await resp.text();

        if(!resp.ok) {
            let errorBody = 'error';
            try {
                errorBody = JSON.parse(text);
            } catch (e) {
                console.log(e.message);
            }

            return {
                isError: true,
                errorBody
            }

        } else {
            if(text) {
                return JSON.parse(text);
            } else {
                return null;
            }
        }
    }
}

export default ApiClient;