import { type ImgHTMLAttributes, memo } from 'react'

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding' | 'fetchPriority'> {
  /**
   * Image source URL
   */
  src: string
  /**
   * Alternative text for the image (required for accessibility)
   */
  alt: string
  /**
   * Source set for responsive images (optional)
   * Format: "image-400w.jpg 400w, image-800w.jpg 800w"
   */
  srcSet?: string
  /**
   * Sizes attribute for responsive images (optional)
   * Format: "(max-width: 768px) 100vw, 50vw"
   */
  sizes?: string
  /**
   * Width of the image (required for CLS prevention)
   */
  width: number
  /**
   * Height of the image (required for CLS prevention)
   */
  height: number
  /**
   * Whether this is an LCP (Largest Contentful Paint) image
   * LCP images should NOT be lazy-loaded
   * @default false
   */
  isLCP?: boolean
  /**
   * Aspect ratio wrapper class (optional, if using aspect-ratio instead of width/height)
   */
  aspectRatio?: string
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * OptimizedImage component for performance-optimized images
 * 
 * Features:
 * - Prevents CLS with explicit width/height or aspect-ratio
 * - Lazy loading for below-the-fold images
 * - Responsive images with srcset/sizes support
 * - Async decoding for better performance
 */
const OptimizedImage = memo(({
  src,
  alt,
  srcSet,
  sizes,
  width,
  height,
  isLCP = false,
  aspectRatio,
  className = '',
  ...props
}: OptimizedImageProps) => {
  // For LCP images, do NOT use lazy loading
  const loading = isLCP ? 'eager' : 'lazy'
  const decoding = 'async'

  // Use aspect-ratio wrapper if provided, otherwise use width/height
  const imageStyle = aspectRatio
    ? { aspectRatio }
    : { width, height }

  const imageProps: ImgHTMLAttributes<HTMLImageElement> = {
    src,
    alt,
    width: aspectRatio ? undefined : width,
    height: aspectRatio ? undefined : height,
    srcSet,
    sizes,
    loading,
    decoding,
    // fetchPriority is a valid HTML attribute for images (prevents layout shift for LCP)
    ...(isLCP && { fetchPriority: 'high' }),
    className: aspectRatio ? `w-full h-auto ${className}` : className,
    style: imageStyle,
    ...props,
  }

  // If using aspect-ratio, wrap in a container
  if (aspectRatio) {
    return (
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio }}
      >
        <img {...imageProps} className={`absolute inset-0 w-full h-full object-cover ${className}`} />
      </div>
    )
  }

  return <img {...imageProps} />
})

OptimizedImage.displayName = 'OptimizedImage'

export default OptimizedImage

