function messageRouterQuery(request, success, error) {
    window.cefQuery({
        request: JSON.stringify(request),
        onSuccess: (response) => {
            var jsonData = JSON.parse(response);
            if (jsonData.ReadyState == 4 && jsonData.Status == 200) {
                if (success) success(jsonData.Data);
            } else {
                if (error) error(jsonData);
                console.log("Error" + jsonData);
            }
        },
        onFailure: (err, msg) => {
            if (error) error({ err, msg });
            console.log(err, msg);
        }
    });
}

module.exports = {
    get: (url, parameters, success, error) => {
        var request = {
            "method": "GET",
            "url": url,
            "parameters": parameters,
            "postData": null
        };

        messageRouterQuery(request, success, error);
    },

    post: (url, parameters, postData, success, error) => {
        var request = {
            "method": "POST",
            "url": url,
            "parameters": parameters,
            "postData": postData
        };

        messageRouterQuery(request, success, error);
    }
}


