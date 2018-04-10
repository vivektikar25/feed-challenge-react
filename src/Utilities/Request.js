class Request {
    constructor() {
        this.headers = new Headers();
        this.headers.set("Content-Type", "application/json");
    }

    fetch = (url, type, payload) => {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;

        const requestUrl = `${baseUrl}${url}`;
        return fetch(requestUrl, {
            method: type,
            headers: this.headers,
            body: payload
        })
            .then(response => response.data)
            .catch(err => {
                return Promise.reject(err);
            });
    };
}

export default Request;
