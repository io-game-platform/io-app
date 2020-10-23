const siteName = "http://localhost:8081"

class ApiClient {

    static get(route) {
        const url = `${siteName}${route}`
        return fetch(url, {
            method: 'GET',
            headers: headers()
        }).then(responseHandler(url));
    }

    static post(route) {
        const url = `${siteName}${route}`
        return fetch(url, {
            method: 'POST',
            headers: headers()
        }).then(responseHandler(url));
    }

}

function headers() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

function responseHandler(url) {
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