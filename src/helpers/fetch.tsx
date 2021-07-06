
const baseUrl = process.env.REACT_APP_API_URL;

export enum httpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}




export const fetchWithoutToken = (endpoint: string, data: {}, method: httpMethod = httpMethod.GET) => {
    const url = `${baseUrl}/${endpoint}`;
    console.log({url, endpoint, data, method});

    if (method === httpMethod.GET) {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

}