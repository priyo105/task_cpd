import axios from 'axios';
import qs from 'qs'; 

export const createCourse = async (courseData) => {
    const urlEncodedData = qs.stringify(courseData);
  
    try {
      const response = await axios.post(
        'http://ec2-63-34-145-237.eu-west-1.compute.amazonaws.com/msb/coursereview', 
        urlEncodedData, 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
            'SYSTEM': 'SYSTEM',           
          },
        }
      );
  
      console.log('Course created successfully:', response.data);
      return response.data;
  
    } catch (error) {
      console.error('Error creating course:', error.response?.data || error.message);
      return null;
    }
  };
  