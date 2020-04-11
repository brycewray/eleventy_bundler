---
layout: layouts/posts/posts.11ty.js
tags: nav
navtitle: Posts
title: Posts
eleventyExcludeFromCollections: true
pagination: 
  data: collections.posts
  size: 5
  reverse: true
  alias: posts
permalink: "{{ site.en.postsArchive.url }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---