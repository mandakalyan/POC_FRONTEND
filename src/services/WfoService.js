import axios from 'axios';
import authHeader from './AuthHeader';

const BASE_URL = 'http://localhost:8080/api';

class Wfo {
  static async CalenderEntry(actualDate, changedDate, reason) {
    try {
      const empId= localStorage.getItem('empId');
      const response = await axios.post(
        `${BASE_URL}/sendrequest/${empId}`,
        {
          actualDate: actualDate,
          changedDate: changedDate,
          reason: reason,
        },
        {
          headers: authHeader()
        }
      );

      // Return the response or any specific data you need
      return response.data;
    } catch (error) {
      // Handle any errors and return an appropriate value or throw an exception
      console.error('Error:', error);
      throw error;
    }
  }
}

export default Wfo;
