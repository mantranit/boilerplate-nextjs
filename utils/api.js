import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

es6promise.polyfill();
const API_ENDPOINT = '';

export const getEndpoint = (path) => {
    return API_ENDPOINT + path;
};

export const getHeader = () => {
    const header = {
        'Content-Type': 'application/json'
    };
    return header;
};

export const apiMethod = ({path, payload, method = 'GET'}) => {
    const parameters = {
        method,
        headers: getHeader(),
    };
    if (payload && typeof payload === 'object') {
        if (payload.token) {
            parameters.headers['token'] = payload.token;
            delete payload.token;
		}
		
		const listKeys = Object.keys(payload);
		for(let i = 0; i < listKeys.length; i++) {
			if (path.includes(`:${listKeys[i]}`)) {
				path = path.replace(`:${listKeys[i]}`, payload[listKeys[i]]);
				delete payload[listKeys[i]];
			}
		}
		if (listKeys.length > 0) {
			if (method === 'GET') {
				const query = new URLSearchParams(payload).toString();
				path = `${path}?${query}`;
			} else {
				parameters.body = JSON.stringify(payload);
			}
		}
	}

    return fetch(getEndpoint(path), parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

export const apiGet = ({path, payload}) => {
    return apiMethod({path, payload, method: 'GET'});
};

export const apiPost = ({path, payload}) => {
    return apiMethod({path, payload, method: 'POST'});
};
