import axios from "axios";
import authHeader from "./AuthHeader";

const BASE_URL = 'http://localhost:8080/api';

export class ReconcilitionService{
    static async Reconciliate(){
        try {
            const empId= localStorage.getItem('empId')
            const response= await axios.get(`${BASE_URL}/reconciliate/children/${empId}`,{
                headers:authHeader(),
            })
            return response.data
            
           } catch (error) {
            console.error(error);
              return [];
            
           }
    
        }
        static async SelfReconciliate(){
            try {
                const empId= localStorage.getItem('empId')
                const response= await axios.get(`${BASE_URL}/reconciliate/${empId}`,{
                    headers:authHeader(),
                })
                return response.data
                
               } catch (error) {
                console.error(error);
                  return [];
                
               }
        
            }
            

    }
