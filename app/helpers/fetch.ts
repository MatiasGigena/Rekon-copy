import axios from "axios";


export const sendData = async(url = '', data: any) =>{
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
        const res = await axios.post(`${BASE_URL}${url}`, data, 
        {
            headers: {
              'Content-Type': 'application/json',
            }
          });
        return res.data;
    } catch (error:any) {
        if(error.response.status !== 400){
            console.log(error);  
            return {error: true, status: 'UNKNOWN', msg: 'Algo falló, pero no te preocupes, lo estamos resolviendo.'}  
        }else{
            return {error: true, status: error.response.status, msg: error.response.data.message };
        }
     
    } 

    
}