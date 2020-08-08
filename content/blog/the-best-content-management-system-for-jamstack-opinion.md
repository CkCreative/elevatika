---
date: 2020-08-08T00:47:24Z
path: netlify-cms-vs-forestry
thumbnail: "/assets/pexels-photo-2600494.jpeg"
title: The Best Content Management System for JAMStack - Netlify CMS or Forestry?
description: 'Netlify CMS vs Forestry.io. Until the other day, I had no idea there
  were more than one git-based content management systems available. Read more. '
author: Mike CK
categories:
  - Technology
---

> updated in August 2020

My first CMS for JAMstack was Netlify CMS. I had been using it since 2018, and in 2019, I came across this amazing book: [Modern Web Development on the JAMStack](https://www.netlify.com/oreilly-jamstack/) by Netlify.

A few pages in there, I found the list of content management systems that are git based and it mentioned [Netlify CMS](https://www.netlifycms.org/) and [Forestry.io](https://forestry.io).

Forestry.io sincerely took me by surprise: how come I've never tried this?

Anyway, let's go slow.

## What is JAMStack?

JAMStack is simply a short form for JavaScript, API and Markup. In most cases, the term is used to describe modern websites that do not require you own a server in order to run.

You can learn more about JAMStack in [this amazing website](https://jamstack.org) that introduces you to all the concepts of JAMStack.

## What I love about Netlify CMS

To be sincere, I like all my website source code and contents in one place; Github, BitBucket or Gitlab. I have read about Contentful and frowned because I don't want to have my website parts scatered all over the place. Contentful is great if you like their idea.

The good:

- I chose Netlify CMS because it allows me to edit and add content directly to my git repository.
- Highly configurable via one file
- You can extend using react
- You can customize content preview using CSS

## What has been the pain in Netlify CMS

I mainly post using my phone and then later do any edits from my computer. However, with Netlify CMS, it crashes every time I try deleting something on the editor. I dont know yet what this is all about. It always gives a weird error. I think it's got something to do with [Slate not supporting mobile very well yet](https://github.com/ianstormtaylor/slate/issues/2062).

To overcome this, I have been using Writer Plus for Android to draft the posts and then open Netlify CMS and paste the markdown text.

This is cumbersome a little. But for the price of free, Netlify CMS is amazing!

## What I love about Forestry.io

I used this CMS for a very short period of time, loved it, but then went back to using Netlify CMS.

### The Good Parts of Forestry CMS

- I don't have to worry about the editor crashing.
- Also, the setup didn't take me more than 5 minutes since I just  imported the front matter from my existing documents and use the same folder I set up for Netlify CMS for the media.
- Very generous free tier
- I still run Netlify CMS at `/admin`  and the Forestry.io CMS from their website. Therefore, if things fall apart with Forestry, I simply go back to my old posting workflow.

## Conclusion

I promised to update this post after sometime to share my experience. I have concluded that both are amazing products, and using them both in one project is easy to set up and works well. However, I now prefer Netlify CMS.
