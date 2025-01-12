import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

export default cloudinary

export const cloudinaryUploader = async(file)=>{
    try {
        if(!file){
            throw new Error('File is required')
        }
        const result = await cloudinary.uploader.upload(file,{
            resource_type:"auto"
        })
        fs.unlinkSync(file)
        return result;
    } catch (error) {
        fs.unlinkSync(file)
        console.log(error)
        return null
    }
}


export const removeFromCloudinary = async(publicID)=>{
    try {
        if(!publicID){
            throw new Error('public id is required')
        }
        const result = await cloudinary.uploader.destroy(publicID)
        return result;
    } catch (error) {
        console.log(error)
    }
}