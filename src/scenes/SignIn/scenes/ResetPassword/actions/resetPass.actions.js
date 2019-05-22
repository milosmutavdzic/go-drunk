import { resetPassService } from '../services/resetPass.service';

export const resetPassActions = {
    resetPass
};

function resetPass(resetPassData, successHandler, errorHandler) {
    return async () => {
        try {
            const result = await resetPassService.resetPassword(resetPassData);
            if (result.status == 200) {
                successHandler(result);
            } else {
                errorHandler(result.data);
            }
        }
        catch (error) {
            errorHandler(error.response.data);
        }
    }
}

