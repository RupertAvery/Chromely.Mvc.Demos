// https://github.com/mattkol/Chromely/wiki/Expose-.NET-class-to-JavaScript
// boundControllerAsync is injected by Chromely/Cef in Program.cs.
// For debugging while developing your web code, it's recommended to override
// boundControllerAsync with your own implementation 

export function get(url, parameters) {
    return new Promise(function (resolve, reject) {
        boundControllerAsync.getJson(url, parameters, response => {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            if (response.ReadyState === 4 && response.Status === 200) {
                resolve(response.Data);
            } else {
                reject(response);
            }
        });
    });
}

export function post(url, parameters, postData) {
    return new Promise(function (resolve, reject) {
        boundControllerAsync.postJson(url, parameters, postData, response => {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            if (response.ReadyState === 4 && response.Status === 200) {
                resolve(response.Data);
            } else {
                reject(response);
            }
        });
    });
}

