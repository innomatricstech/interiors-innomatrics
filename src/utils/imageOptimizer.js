/**
 * Image quality optimizer for web performance
 */

export const optimizeImageUrl = (url, options = {}) => {
  if (!url || typeof url !== 'string') return url;
  
  const {
    quality = 70,
    width = 800,
    format = 'webp'
  } = options;

  // If it's already an optimized URL or external URL, return as-is
  if (url.includes('cloudinary') || url.includes('res.cloudinary.com')) {
    return url;
  }

  // For local images, we'll serve as-is (in production, use CDN)
  return url;
};

export const getVideoThumbnail = (videoUrl) => {
  // Return a low-quality placeholder for videos
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"%3E%3Crect width="800" height="450" fill="%231e293b"/%3E%3Cpath d="M320,200 L480,270 L320,340 Z" fill="%2360a5fa"/%3E%3C/svg%3E';
};

export const preloadImages = (imageUrls) => {
  if (typeof window === 'undefined') return;
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};