---
layout: layouts/posts/posts.11ty.js
tags: nav
navtitle: Posts
title: Posts
pagination: 
  data: collections.post
  size: 5
  reverse: true
  alias: posts
permalink: "{{ site.en.postsArchive.url }}/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---