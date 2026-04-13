const http = require('http');
const https = require('https');

/**
 * Next.js Image Warmer
 * This script crawls your main pages to trigger Next.js Image Optimization.
 * Run this after deployment to ensure PageSpeed bots get cached images.
 */

const CONFIG = {
  baseUrl: 'https://bharathiinstitutes.com', // Update this to your production URL
  pages: [
    '/',
    '/about',
    '/courses',
    '/contact',
    '/placements',
    '/scholarship',
    '/gallery',
    '/admission'
  ],
  // Common widths Next.js uses for optimization
  widths: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  quality: 75
};

async function warmImages() {
  console.log(`🚀 Starting Image Warmer for ${CONFIG.baseUrl}...`);
  
  for (const path of CONFIG.pages) {
    console.log(`🔎 Scanning page: ${path}`);
    try {
      const html = await fetchText(`${CONFIG.baseUrl}${path}`);
      
      // Basic regex to find image paths in the HTML
      // Looking for /_next/image?url=... or standard paths that get converted
      const imgRegex = /srcset="([^"]+)"/g;
      let match;
      const urls = new Set();

      while ((match = imgRegex.exec(html)) !== null) {
        const srcset = match[1];
        const segments = srcset.split(',');
        segments.forEach(s => {
          const url = s.trim().split(' ')[0];
          if (url.startsWith('/_next/image') || url.startsWith('http')) {
             urls.add(url.startsWith('/') ? `${CONFIG.baseUrl}${url}` : url);
          }
        });
      }

      console.log(`   Found ${urls.size} unique optimized image variants. Warming...`);
      
      const requests = Array.from(urls).map(url => fetchStatus(url));
      await Promise.all(requests);
      
      console.log(`   ✅ Finished warming ${path}`);
    } catch (err) {
      console.error(`   ❌ Failed to warm ${path}:`, err.message);
    }
  }
  
  console.log('🏁 Image warming complete!');
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function fetchStatus(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(500));
  });
}

warmImages();
