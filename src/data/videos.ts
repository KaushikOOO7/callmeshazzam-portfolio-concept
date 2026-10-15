export interface CreatorVideo {
  id: string; // YouTube Video ID
  title: string;
  subtitle?: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  url: string;
  embedUrl: string;
  category: 'Technology' | 'Gadgets & Reviews' | 'Opinions' | 'Entertainment' | 'Featured Videos';
  duration: string;
  publishedDate?: string;
  isFeatured?: boolean;
  aspect?: 'wide' | 'standard' | 'tall';
  tags: string[];
  summary: string;
  keyTakeaways?: string[];
}

export const verifiedVideos: CreatorVideo[] = [
  {
    id: 'yYm9SkJl8xA',
    title: 'Google Pixel 11 | My Long Term Review | Still Not Enough.. | Malayalam',
    subtitle: 'Addressing thermal efficiency, Tensor performance, real camera consistency, and true daily value.',
    thumbnail: 'https://i.ytimg.com/vi/yYm9SkJl8xA/maxresdefault.jpg',
    fallbackThumbnail: '/images/creator/thumb-pixel.jpg',
    url: 'https://www.youtube.com/watch?v=yYm9SkJl8xA',
    embedUrl: 'https://www.youtube-nocookie.com/embed/yYm9SkJl8xA',
    category: 'Featured Videos',
    duration: '15:10',
    publishedDate: 'Recent Review',
    isFeatured: true,
    aspect: 'wide',
    tags: ['Google Pixel', 'Long Term Review', 'Camera & Thermals'],
    summary: 'A comprehensive long-term daily driver verdict on Google’s premier smartphone. Unfiltered breakdown of software smoothness, battery life under Indian and Gulf summers, and whether AI additions compensate for hardware pricing.',
    keyTakeaways: [
      'Real-world thermal behavior during extended 4K recording sessions',
      'Computational color science vs optical realism in complex lighting',
      'The honest consumer verdict on Google hardware support'
    ]
  },
  {
    id: 'v6Nf6vJNr20',
    title: 'Vivo V80 | A Good Photography Phone | My Review | @vivoarabia | Malayalam',
    subtitle: 'Putting the ZEISS optics portrait engine and sensor tuning to the test in real conditions.',
    thumbnail: 'https://i.ytimg.com/vi/v6Nf6vJNr20/maxresdefault.jpg',
    fallbackThumbnail: '/images/creator/thumb-vivo.jpg',
    url: 'https://www.youtube.com/watch?v=v6Nf6vJNr20',
    embedUrl: 'https://www.youtube-nocookie.com/embed/v6Nf6vJNr20',
    category: 'Gadgets & Reviews',
    duration: '12:45',
    publishedDate: 'Hardware Test',
    isFeatured: false,
    aspect: 'tall',
    tags: ['Vivo V80', 'ZEISS Optics', 'Mobile Photography'],
    summary: 'Testing the Vivo V80 camera capabilities across high-contrast environments. An honest evaluation of portrait edge detection, optical stability, and day-to-day UI ergonomics.',
    keyTakeaways: [
      'ZEISS co-engineered portrait bokeh simulation accuracy',
      'Low-light dynamic range preservation without unnatural night mode glow',
      'Chassis hand feel, weight distribution, and real battery endurance'
    ]
  },
  {
    id: 'OQ2vR_APvxw',
    title: 'CHAi with Tech | iPhone Duo, iQOO 16 & OnePlus 16 Coming to India etc | (307)',
    subtitle: 'Episode 307 of the signature weekly tech conversation over a cup of hot chai.',
    thumbnail: 'https://i.ytimg.com/vi/OQ2vR_APvxw/maxresdefault.jpg',
    fallbackThumbnail: '/images/creator/thumb-chai.jpg',
    url: 'https://www.youtube.com/watch?v=OQ2vR_APvxw',
    embedUrl: 'https://www.youtube-nocookie.com/embed/OQ2vR_APvxw',
    category: 'Opinions',
    duration: '18:22',
    publishedDate: 'Episode #307',
    isFeatured: false,
    aspect: 'standard',
    tags: ['CHAi with Tech', 'Tech Leaks', 'Industry Analysis'],
    summary: 'The signature CallMeShazzam format: casual, sharp, and unfiltered discussion on upcoming smartphone launches, processor benchmarks, and audience questions.',
    keyTakeaways: [
      'Upcoming flagship pricing shifts in the subcontinent',
      'Why minor generational refreshes deceive ordinary buyers',
      'Direct answers to community tech questions and dilemmas'
    ]
  },
  {
    id: '8rortdIWNTg',
    title: 'Xiaomi 18 Pro | Ferrari Red Color Edition | Unboxing | Malayalam',
    subtitle: 'Hands-on unboxing and finish quality inspection of the limited Ferrari Red edition.',
    thumbnail: 'https://i.ytimg.com/vi/8rortdIWNTg/maxresdefault.jpg',
    fallbackThumbnail: '/images/creator/thumb-xiaomi.jpg',
    url: 'https://www.youtube.com/watch?v=8rortdIWNTg',
    embedUrl: 'https://www.youtube-nocookie.com/embed/8rortdIWNTg',
    category: 'Technology',
    duration: '10:30',
    publishedDate: 'Unboxing & First Look',
    isFeatured: false,
    aspect: 'standard',
    tags: ['Xiaomi 18 Pro', 'Ferrari Red', 'Unboxing'],
    summary: 'Unboxing the limited edition red Xiaomi 18 Pro. Examining display calibration, charging curve speeds, camera protrusion balance, and in-box accessories.',
    keyTakeaways: [
      'Exotic finish durability and fingerprint susceptibility',
      'Hyper-fast charging thermal management and battery health protocols',
      'Software bloatware status on retail units'
    ]
  },
  {
    id: '_GVIIV4YZbQ',
    title: 'Flipkart & Amazon Sale 2026 | My Pick | Malayalam',
    subtitle: 'Cutting through fake discount percentages to highlight genuine value-for-money purchases.',
    thumbnail: 'https://i.ytimg.com/vi/_GVIIV4YZbQ/maxresdefault.jpg',
    fallbackThumbnail: '/images/creator/thumb-sale.jpg',
    url: 'https://www.youtube.com/watch?v=_GVIIV4YZbQ',
    embedUrl: 'https://www.youtube-nocookie.com/embed/_GVIIV4YZbQ',
    category: 'Technology',
    duration: '14:15',
    publishedDate: 'Shopping Guide',
    isFeatured: false,
    aspect: 'standard',
    tags: ['Festival Deals', 'Buyer Guide', 'Honest Value'],
    summary: 'A viewer-first buying advisory exposing inflated MRP tricks and showcasing smartphones, tablets, and audio gear that actually received price drops.',
    keyTakeaways: [
      'How retailers manipulate base prices prior to festival sales',
      'Top 3 smartphone picks under key budget brackets',
      'Gadgets you should definitely avoid regardless of the discount'
    ]
  },
  {
    id: '_i43GUnrvZQ',
    title: 'Sunday Live with Shazzam | Community Q&A & Tech Roast',
    subtitle: 'Interactive live stream answering live viewer queries and reacting to gadget fails.',
    thumbnail: 'https://i.ytimg.com/vi/_i43GUnrvZQ/maxresdefault.jpg',
    fallbackThumbnail: '/images/creator/thumb-live.jpg',
    url: 'https://www.youtube.com/watch?v=_i43GUnrvZQ',
    embedUrl: 'https://www.youtube-nocookie.com/embed/_i43GUnrvZQ',
    category: 'Entertainment',
    duration: '42:00',
    publishedDate: 'Live Stream',
    isFeatured: false,
    aspect: 'tall',
    tags: ['Community Live', 'Q&A', 'Sarcasm & Banter'],
    summary: 'Unscripted Sunday live broadcast connecting directly with over 2.5 million subscribers. Tech debates, viewer setup reactions, and sarcastic commentary on recent announcements.',
    keyTakeaways: [
      'Direct, unfiltered dialogue with the CallMeShazzam community',
      'Debating compact phones vs giant screen phablets',
      'Behind-the-scenes stories from creator studio workflows'
    ]
  },
  {
    id: 'K_XWpkods4k',
    title: 'Ciga Design | Planet 2 Mechanical Watch Breakdown',
    subtitle: 'Examining innovative non-traditional mechanical watch engineering and wrist presence.',
    thumbnail: 'https://i.ytimg.com/vi/K_XWpkods4k/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/K_XWpkods4k/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=K_XWpkods4k',
    embedUrl: 'https://www.youtube-nocookie.com/embed/K_XWpkods4k',
    category: 'Gadgets & Reviews',
    duration: '09:40',
    publishedDate: 'Horology Spotlight',
    isFeatured: false,
    aspect: 'standard',
    tags: ['Mechanical Watches', 'Design', 'Horology'],
    summary: 'A deep aesthetic and mechanical inspection of the Ciga Design Planet 2 watch. Examining gear movement, sapphire crystal durability, and distinctive wrist styling.',
    keyTakeaways: [
      'Innovative gear train architecture inspired by planetary rotation',
      'Macro inspection of case finishing and skeleton dial',
      'Value analysis compared to traditional Swiss timepieces'
    ]
  },
  {
    id: 'mhwG2bUky04',
    title: 'Casio Arabic Dial Watch for Power Group',
    subtitle: 'Spotlighting the regional collectible Casio with iconic Eastern Arabic numerals.',
    thumbnail: 'https://i.ytimg.com/vi/mhwG2bUky04/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/mhwG2bUky04/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=mhwG2bUky04',
    embedUrl: 'https://www.youtube-nocookie.com/embed/mhwG2bUky04',
    category: 'Gadgets & Reviews',
    duration: '08:15',
    publishedDate: 'Gear Feature',
    isFeatured: false,
    aspect: 'standard',
    tags: ['Casio', 'Arabic Dial', 'Everyday Carry'],
    summary: 'A look at the culturally iconic Casio watch featuring Arabic numerals on the dial, celebrating clean minimalist design and accessible durability.',
    keyTakeaways: [
      'The cultural significance of the Arabic dial edition',
      'Legendary Casio quartz accuracy and everyday ruggedness',
      'Why affordable classics hold timeless appeal in any gear collection'
    ]
  }
];

export const youtubeChannelUrls = {
  main: 'https://www.youtube.com/@callmeshazzamtech',
  videos: 'https://www.youtube.com/@callmeshazzamtech/videos',
  playlists: 'https://www.youtube.com/@callmeshazzamtech/playlists',
};
