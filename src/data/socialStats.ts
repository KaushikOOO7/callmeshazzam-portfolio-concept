export interface SocialStat {
  id: string;
  platform: string;
  metricLabel: string;
  numericValue: number;
  displaySuffix: string;
  prefix?: string;
  decimals: number;
  description: string;
  profileUrl: string;
  lastVerifiedDate: string;
}

export const verifiedSocialStats: SocialStat[] = [
  {
    id: 'yt-subscribers',
    platform: 'YouTube',
    metricLabel: 'YOUTUBE SUBSCRIBERS',
    numericValue: 2.56,
    displaySuffix: 'M',
    decimals: 2,
    description: 'Active tech community following weekly reviews and teardowns',
    profileUrl: 'https://www.youtube.com/@callmeshazzamtech',
    lastVerifiedDate: 'October 2026 (Verified via callmeshazzam.com API)',
  },
  {
    id: 'yt-views',
    platform: 'YouTube',
    metricLabel: 'TOTAL YOUTUBE VIEWS',
    numericValue: 1.38,
    displaySuffix: 'B',
    decimals: 2,
    description: '1.38 Billion lifetime views across tech breakdowns and tests',
    profileUrl: 'https://www.youtube.com/@callmeshazzamtech',
    lastVerifiedDate: 'October 2026 (Verified via callmeshazzam.com API)',
  },
  {
    id: 'yt-videos',
    platform: 'YouTube Catalog',
    metricLabel: 'EPISODES & REVIEWS',
    numericValue: 2081,
    displaySuffix: '+',
    decimals: 0,
    description: 'In-depth smartphone evaluations, sketches, and live Q&As',
    profileUrl: 'https://www.youtube.com/@callmeshazzamtech/videos',
    lastVerifiedDate: 'October 2026 (Verified via channel archive)',
  },
  {
    id: 'ig-followers',
    platform: 'Instagram',
    metricLabel: 'INSTAGRAM COMMUNITY',
    numericValue: 385,
    displaySuffix: 'K+',
    decimals: 0,
    description: 'Daily tech perspectives, reel drops, and behind-the-scenes thoughts',
    profileUrl: 'https://www.instagram.com/callmeshazzam/',
    lastVerifiedDate: 'October 2026 (Verified via public Instagram profile)',
  },
];
