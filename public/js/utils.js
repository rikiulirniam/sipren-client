/**
 * 
 * @param {String} uri 
 * @param {"GET"|"POST"|"PUT"|"DELETE"} method 
 * @param {any} body 
 */
async function siprenApi(uri, method = 'GET', body = '') {
    let response = await fetch(uri, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then(data => data);

    return response;
}

function selectById(id){
    return document.getElementById(id);
}

function select(select){
    return document.querySelector(select);
}