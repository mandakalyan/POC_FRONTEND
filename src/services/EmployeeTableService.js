import axios from 'axios';
import authHeader from './AuthHeader';

const BASE_URL = 'http://localhost:8080/api';
export class TableService
{
    static async getChildren(){ 
       try {
        const empId= localStorage.getItem('empId')
        const response= await axios.get(`${BASE_URL}/${empId}/children1`,{
            headers:authHeader(),
        })
        return response.data
        
       } catch (error) {
        console.error(error);
          return [];
        
       }

    }
}