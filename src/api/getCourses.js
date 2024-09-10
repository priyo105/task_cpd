
import axios from "axios"

export const getAllCourses= async()=>{

    const courses=await axios.get('http://ec2-63-34-145-237.eu-west-1.compute.amazonaws.com/msb/coursereview/list')
    return courses.data;

}