import cloudinary from 'cloudinary-core';

const cloudinaryConfig = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
};

cloudinary.config(cloudinaryConfig);

export const uploadImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'mi-tienda-preset');
        
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );
        
        if (!response.ok) {
            throw new Error('Error al subir la imagen');
        }
        
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error('Error al subir imagen:', error);
        throw error;
    }
};

export const getImageUrl = (publicId, options = {}) => {
    const { width, height, crop = 'scale' } = options;
    
    return cloudinary.url(publicId, {
        width,
        height,
        crop,
        format: 'auto',
        quality: 'auto',
        fetch_format: 'auto',
    });
};

export const deleteImage = async (publicId) => {
    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/destroy`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    public_id: publicId,
                    api_key: cloudinaryConfig.api_key,
                    timestamp: Date.now() / 1000,
                    signature: cloudinary.utils.api_sign_request({
                        public_id: publicId,
                        timestamp: Date.now() / 1000,
                    }, cloudinaryConfig.api_secret),
                }),
            }
        );
        
        if (!response.ok) {
            throw new Error('Error al eliminar la imagen');
        }
        
        return response.json();
    } catch (error) {
        console.error('Error al eliminar imagen:', error);
        throw error;
    }
};
