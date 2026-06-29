/**
 * Helper to convert standard YouTube watch/share URLs to clean iframe embed URLs
 */
export function getYoutubeEmbedUrl(url: string): string {
  if (!url) return '';
  try {
    // Check if it's already an embed URL
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    let videoId = '';
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtube.com/v/')) {
      videoId = url.split('youtube.com/v/')[1]?.split('?')[0] || '';
    }
    
    // Fallback to a safe id if none was extracted
    if (!videoId) {
      videoId = 'dQw4w9WgXcQ'; // Default placeholder video if parsing fails
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  } catch (e) {
    return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  }
}

/**
 * Helper to format date strings into readable localized displays
 */
export function formatDate(dateStr: string): string {
  try {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  } catch (e) {
    return dateStr;
  }
}
