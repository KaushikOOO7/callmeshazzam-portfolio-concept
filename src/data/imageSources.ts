export interface ImageSourceMeta {
  filename: string;
  localPath: string;
  sourceUrl: string;
  description: string;
  attribution: string;
  category: 'portrait' | 'avatar' | 'banner' | 'thumbnail';
}

export const creatorImageSources: ImageSourceMeta[] = [
  {
    filename: 'shaz-hero.jpg',
    localPath: '/images/creator/shaz-hero.jpg',
    sourceUrl: 'https://www.callmeshazzam.com/shazzam.jpg',
    description: 'Official primary studio portrait of Shaz Mohamed (CallMeShazzam) wearing glasses and beanie.',
    attribution: 'CallMeShazzam official website (callmeshazzam.com)',
    category: 'portrait',
  },
  {
    filename: 'shaz-about.jpg',
    localPath: '/images/creator/shaz-about.jpg',
    sourceUrl: 'https://i.ytimg.com/vi/_i43GUnrvZQ/maxresdefault.jpg',
    description: 'Monochrome multi-angle studio portrait of Shaz Mohamed from CallMeShazzam Live.',
    attribution: '@callmeshazzamtech official channel archive',
    category: 'portrait',
  },
  {
    filename: 'shaz-portrait-02.jpg',
    localPath: '/images/creator/shaz-portrait-02.jpg',
    sourceUrl: 'https://i.ytimg.com/vi/OQ2vR_APvxw/maxresdefault.jpg',
    description: 'Shaz Mohamed hosting the signature CHAi with Tech series in studio.',
    attribution: 'CallMeShazzam YouTube channel (@callmeshazzamtech)',
    category: 'portrait',
  },
  {
    filename: 'shaz-channel-banner.jpg',
    localPath: '/images/creator/shaz-channel-banner.jpg',
    sourceUrl: 'https://www.youtube.com/@callmeshazzamtech',
    description: 'Official YouTube channel header banner for @callmeshazzamtech.',
    attribution: 'CallMeShazzam YouTube channel banner',
    category: 'banner',
  },
  {
    filename: 'shaz-banner.png',
    localPath: '/images/creator/shaz-banner.png',
    sourceUrl: 'https://www.callmeshazzam.com/opengraph-image',
    description: 'Official OpenGraph branding image from callmeshazzam.com.',
    attribution: 'CallMeShazzam official web platform',
    category: 'banner',
  },
];
