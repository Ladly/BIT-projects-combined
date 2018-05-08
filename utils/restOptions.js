const defaultHeaders = {
	'Content-Type': 'application/json',
	'Key': '64C82EE',
	'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
}

const createHeaders = () => {
	const sessionId = sessionStorage.getItem('sessionId')
	return  {
		'Content-Type': 'application/json',
		'Key': '64C82EE',
		'SessionId': sessionId
	}
}

export const GETOPTIONS = {
	method: 'GET',	
	headers : createHeaders(),
}

export const CREATEPOSTOPTIONS = (body) => {
	return {
		method: 'POST',
		headers : createHeaders(),
		body: JSON.stringify(body)
	}
}

export const CREATEPUTOPTIONS = (body) => {
	return {
		method: 'PUT',
		headers : createHeaders(),
		body: JSON.stringify(body)
	}
}

export const DELETEOPTIONS = {
	method: 'DELETE',
	headers : createHeaders()
}

export const createUser = (body) => {
	return {
		method: 'POST',
		headers : {
			'Content-Type': 'application/json',
			'Key': '64C82EE',
		},
		body: JSON.stringify(body)
	}
}

export const loginUser = (body) => {
	return {
		method: 'POST',
		headers : {
			'Content-Type': 'application/json',
			'Key': '64C82EE',
		},
		body: JSON.stringify(body)
	}
}

