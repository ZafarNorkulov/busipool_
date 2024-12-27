/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://busipool.ru', // O'zingizning domeningiz URL manzili
    generateRobotsTxt: true, // robots.txt faylini avtomatik yaratish
    sitemapSize: 5000, // Har bir sitemap uchun maksimal URL soni
    exclude: ['/secret-page'], // Sitemapga kiritilmaydigan sahifalar
    changefreq: 'daily', // URL o'zgarish chastotasi (masalan, 'daily', 'weekly')
    priority: 0.7, // URLning ustuvorligi
  };
  
  module.exports = config;
  