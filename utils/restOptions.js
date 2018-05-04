const headers = {
    'Content-Type': 'application/json',
    'Key': '64C82EE',
    'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
}

export const GETOPTIONS = {
    method: 'GET',
    headers	
}

export const CREATEPOSTOPTIONS = (body) => {
	return {
		method: 'POST',
		headers,
		body: JSON.stringify(body)
	}
}

export const CREATEPUTOPTIONS = (body) => {
	return {
		method: 'PUT',
		headers,
		body: JSON.stringify(body)
	}
}

export const DELETEOPTIONS = {
	method: 'DELETE',
	headers
}
