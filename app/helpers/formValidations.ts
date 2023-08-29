interface IFreeAuditValidations {
    type: string;
    text: string;
}
export const freeAuditValidations = (data:IFreeAuditValidations[]):{ok: boolean, msg: string} =>{
    let res = {
        ok: true,
        msg: "ok"
    }

    let count: number = 0
    while(count<data.length){
         const { type, text } = data[count];
       if(type === 'email'){
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            const isValidEmail: boolean = regex.test(text);
            if(!isValidEmail){
                res["ok"] = false
                res["msg"] = 'Invalid email.'
                break;
            }
            
    
        }else if(type === 'website'){
            if(text.length <=5){
                res["ok"] = false
                res["msg"] = 'Invalid website.'
               break;
            }
        }else if(type === 'doubt'){
            if(text.length <=5){
                res["ok"] = false
                res["msg"] = 'Doubt must contain at least 5 characters. '
               break;
            }
        }
        count+=1
    }
    
       
 

    
    return res
}