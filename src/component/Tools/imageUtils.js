import imageCompression from "browser-image-compression";

export const getCroppedImage = (imageSrc, crop) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const { x, y, width, height } = crop;

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/jpeg');
        };

        image.onerror = (error) => {
            reject(error);
        };
    });
};

export const getBase64Image = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(blob);
    });
};

export const compressImage = (imageBlob, maxSizeInBytes) => {
    return new Promise((resolve, reject) => {
        const maxSizeMB = maxSizeInBytes / (1024 * 1024);
        const options = {
            maxSizeMB,
            maxWidthOrHeight: 400,
            useWebWorker: true,
        };

        imageCompression(imageBlob, options)
            .then((compressedBlob) => resolve(compressedBlob))
            .catch((error) => reject(error));
    });
};
