import axios from "axios";
const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
const CLOUDINARY_PRESET = "nextjsproduct";
export const uploadImage = (image: any): any => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_PRESET);
  
    return axios.post(CLOUDINARY_API, formData);
  };