import { v2 as kk } from "cloudinary";
import { response } from "express";
// eslint
  import fs from "fs"

  
          
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET  
  });
  const uploadOnCloudinary = async (localPath) => {
    try{
     if(!localPath) return null
     await cloudinary.uploader.upload(localPath , {
        resource_type: "auto"
     })
     console.log("File uploaded successfully",
     response.url);
     return response;
    }catch(error)
    {
       fs.unlinkSync(localFilePath)
       return null;
    }
  }

 export {uploadOnCloudinary }