const API_URL = "http://localhost:8000"

async function sendRequest(url, options) {
    const response = await fetch(url, options)
    return await response.json();
}

function createResquestOptions(method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(body)
    };
}

async function fetchData(endpoit) {
    return await sendRequest(`${API_URL}/${endpoit}`)
}

async function postData(endpoit, data) {
    const options = createResquestOptions('POST', data)
    return await sendRequest(`${API_URL}/${endpoit}`, options);
}

async function updateData(endpoit,id, data) {
    const options = createResquestOptions('PUT', data)
    return await sendRequest(`${API_URL}/${endpoit}/${id}`, options);
}

async function deleteData(endpoit,id) {
    const options = createResquestOptions('DELETE')
    return await sendRequest(`${API_URL}/${endpoit}/${id}`, options);
}

export default {
    postData,
    updateData,
    fetchData,
    deleteData,
};