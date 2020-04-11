// Based shamelessly on Reuben Lillie's code:
// https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_data/site.js

 module.exports = {
   baseURL: 'https://brycewray.com',
   defaultLocale: 'en-US',
   en: {
     locale: 'en-US',
     title: 'BryceWray.com',
     tagline: 'Observations, opinions, geekery.',
     separator: ' • ',
     pagination: {
       navLabel: 'Pagination',
       pageLabel: 'Page',
       first: '1',
       firstLabel: '1',
       previous: 'Previous',
       next: 'Next',
       last: 'End',
       lastLabel: 'Last page'
     },
     postsArchive: {
       headline: 'Posts',
       prompt: 'Visit the posts',
       url: '/posts/'
     },
     dateOptions: {
       year: 'numeric',
       month: 'long',
       day: 'numeric',
       timeZone: 'America/Chicago'
     }
   }
 }