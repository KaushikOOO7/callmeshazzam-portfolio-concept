export interface ContentItem {
  id: string; // YouTube Video ID
  title: string;
  subtitle: string;
  category: 'Technology' | 'Gadgets & Reviews' | 'Opinions' | 'Entertainment' | 'Featured Videos';
  duration: string;
  date: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  isFeatured?: boolean;
  aspect?: 'wide' | 'standard' | 'tall';
  url: string;
  embedUrl?: string;
  tags: string[];
  summary: string;
  keyTakeaways?: string[];
}

export interface SocialLinkItem {
  name: string;
  handle: string;
  label: string;
  url: string;
  verified: boolean;
  category: string;
}

export interface SiteConfig {
  creatorName: string;
  moniker: string;
  brandName: string;
  tagline: string;
  eyebrow: string;
  supportingCopy: string;
  instagramUrl: string;
  websiteUrl: string;
  youtubeUrl: string;
  youtubeVideosUrl: string;
  contactDisclaimer: string;
}
