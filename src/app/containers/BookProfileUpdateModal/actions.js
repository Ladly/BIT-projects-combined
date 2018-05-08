import { UPDATE_PROFILE } from './constants'

import { BookProfileService } from './../../../../services/BookProfileService'

export const postUpdatedData = (data) => {
	return {
		type: UPDATE_PROFILE,
		payload: BookProfileService.updateProfile(data)
	}
}