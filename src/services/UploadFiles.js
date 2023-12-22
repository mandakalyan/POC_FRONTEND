import axios from "axios";
import authHeader from "./AuthHeader";

const BASE_URL = 'http://localhost:8080/api';

 export class FileService{




static async uploadFiles(file1, file2) {
  try {
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    const response = await axios.post(`${BASE_URL}/compare-sum`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Add other headers here, e.g., authorization headers
        // "Authorization": "Bearer your-auth-token",
        ...authHeader(),

      },
    });

    return response.data;
  } catch (error) {
    console.error("Error uploading files:", error);
    throw error;
  }
}

// You can add more functions for other API endpoints or actions as needed

 }