"use strict";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aniketahir.vercel.app',
  // Your domain
  generateRobotsTxt: true,
  // Generates a robots.txt file
  sitemapSize: 7000 // Split sitemap after 7000 URLs, if necessary

};