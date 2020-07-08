import * as constant from './constant';

export const formAction = (param) => {    
    return {
        type: constant.ACTION_FORM,
        payload: param.payload
    }
 }
