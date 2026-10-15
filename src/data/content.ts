import { ContentItem } from '../types';
import { verifiedVideos } from './videos';

export const contentItems: ContentItem[] = verifiedVideos.map((video) => ({
  id: video.id,
  title: video.title,
  subtitle: video.subtitle || '',
  category: video.category,
  duration: video.duration,
  date: video.publishedDate || 'Verified Episode',
  thumbnail: video.thumbnail,
  fallbackThumbnail: video.fallbackThumbnail,
  isFeatured: video.isFeatured,
  aspect: video.aspect,
  url: video.url,
  embedUrl: video.embedUrl,
  tags: video.tags,
  summary: video.summary,
  keyTakeaways: video.keyTakeaways,
}));

export const categories = [
  'All',
  'Featured Videos',
  'Technology',
  'Gadgets & Reviews',
  'Opinions',
  'Entertainment'
] as const;

export type CategoryType = (typeof categories)[number];
