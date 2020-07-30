---
path: 10-important-web-technologies-for-modern-online-business
date: 2020-06-23T10:37:58.944+00:00
thumbnail: "/assets/internet_solutions_platforms.jpg"
title: 10 Important Web Technologies and Platforms for Modern Companies
description: When you want to go online as a business, you want the best value for your money. These are the technologies that are highly valuable and yet affordable. Your business needs them, trust me.
author: Mike CK
categories:
  - Guides
---

You already know how much benefits your business will enjoy when you take it online. However, many at times, you will find yourself struggling with immense bills and technology stacks that are hard to manage. I have come up with this short list from my personal experience and working with clients from different industries. I think I will expand the list soon.

I have used these technologies and platforms to deliver reliable business solutions at very attractive rates. These technologies are the reason products and services delivered by our company are reliable, and yet affordable.

## JAMstack

What is JAMstack? JAMstack stands for JavaScript, APIs, and Markup. It is a modern technology stack used to deliver super-fast websites. The resulting websites are also easy to find on Google due to excellent SEO as well as cheap to host because the resulting websites don't need a server to run.

Read more about JAMstack in this excellent [whitepaper on Netlify](https://www.netlify.com/whitepaper/). It shows how some companies deliver 10x better web solutions to their visitors.

JAMstack, in simple terms, refers to a website/app that is ready to be consumed by the browser and does not require any code to run on the server for it to function. However, if there is anything that needs to be updated, say you submit a form, that is when some code on the server can be invoked.

Traditional websites, on the other hand, require that a server runs the code and spits out web pages for every request. I know some caching can help in most cases, but at the end of the day, a website is compiling a page when requested for the first time. Yet, for JAMstack, the website is static/ready to be displayed by the browser all the time.

## Netlify

I explained a little about JAMstack above and gave you the link to a whitepaper that [Netlify](https://www.netlify.com) released. Well, the term JAMstack was coined by the founder of Netlify. So, it is really hard to recommend JAMstack to a client without mentioning Netlify.

You see, Netlify allows you to host websites and web applications at a fraction of the cost of hosting traditional web applications. You can only host JAMstack solutions on Netlify.

The reason Netlify is able to offer very cheap hosting packages and even free as you start, should not be surprising since I already mentioned that JAMstack websites are very cheap to host.

Netlify is excellent for new companies that are starting as they have a generous free plan. At the same time, existing companies can benefit by gradually migrating parts of their existing web solutions to JAMstack and hosting them for free over there as they analyze and observe to establish whether to migrate fully or not.

## Github, Bitbucket or Gitlab

Git is not just a good technology for coders. [Github](https://github.com), [Bitbucket](https://bitbucket.org) and [Gitlab](https://gitlab.com) are excellent collaboration tools that you can use alongside modern web technologies and platforms especially Netlify and the JAMstack.

If you know how Git works, you already know the benefits. But still, for a JAMstack website hosted by Netlify, every time you push changes to Github, Bitbucket or Gitlab, Netlify will start publishing these changes instantly such that if this were a new article, it will be visible to the world within a few seconds.

These three platforms are also excellent for backing up your code, your articles, and even documents.

## Docker

It is working on my computer, why does it fail on the web?

This is a question that rarely comes up when you use [Docker](https://www.docker.com/). Docker makes building and publishing web applications simple and reliable.

Also, if you are thinking of scaling your application, Docker has great tools that will allow you to serve millions of users across the world.

Are you scared of server administration? Docker will help ease the burden.

## Digital Ocean

Docker gives you the ability to assure your application will run as good on the server as it does on your computer. [Digital Ocean](https://www.digitalocean.com/), on the other hand, gives you the platform to host Docker containers at the cheapest rates around.

Also, it will give you a chance to start deploying multiple containers when your user base multiplies. Therefore, you can host simple applications that serve a small user base or enterprise applications that serve many many users.

When I say Digital Ocean offers cheap hosting, I mean as cheap as 5 USD per month.

## Hasura

Do you feel database administration is difficult? Do you want a simple way to access your data? Do you want a realtime database that you can connect to your application with a few magical lines of code?

Meet [Hasura](https://www.hasura.io). Hasura is a GraphQL database engine. What this means is that, instead of rolling out your database and then writing a thousand lines of code to create an API to interact with the database, Hasura gives you excellent APIs for free. Also, the engine is highly optimized. So much that you can support millions of database reads and writes without any problem.

You can use Hasura to make:

- Online chat applications
- Mobile chat applications
- Realtime data applications like stock tracking apps
- Online communities

Read more about GraphQL from [Apollo GraphQL guides](https://www.apollographql.com/docs/tutorial/introduction/).

## Serverless Functions (Cloud Functions or Lambda Functions)

Sometimes all you need is a function that does one specific thing when a given event occurs. For example, you want to send out an email alert whenever your database is updated.

With [Hasura](https://www.hasura.io), you get the ability to use webhooks whenever data changes.

Therefore, instead of having to create entire applications to receive such web hooks, you can simply create a serverless function, which is easier to host and is fast.

A serverless function is a simple piece of code that runs when a given URL requested. All you do is write the function and never have to worry about the underlying infrastructure or perform server administration.

Google Cloud Platform, Firebase, Amazon, Netlify, and Microsoft Azure all offer a way for you to host serverless functions, mostly in JavaScript.

## Hugo and Gatsbyjs

The first web technology I introduced is JAMstack. Well, essentially, JAMstack gives you a static website. A static website is generated using various tools. Among these tools are [Hugo](https://gohugo.io/) and [Gatsbyjs](https://www.gatsbyjs.org/).

There are several other static website generators but whenever I make a website for a client, I always choose either Hugo or Gatsbyjs. The two are very beneficial.

Hugo is blazing fast. Like you can make a website with hundreds of pages, e.g a large blog, and it will finish building the website within just a few seconds. So, by default, I always go with Hugo.

Gatsbyjs is excellent for PWAs. Progressive web apps are the real deal at the moment. The reason for this popularity in PWAs is that you can install a PWA on a phone just like any other app you can download from Google Play Store. Oh, and you can even package a PWA as an APK and host it on Google Play Store.

So, effectively, choosing to go the PWA route means getting two solutions in one implementation. Whenever I do need a PWA, I can trade the speed I get from Hugo for the excellent PWA support that I get from Gatsbyjs.

## CircleCI

The subtitle here should ideally be `continuous integration and continuous deployment` or what is popularly known as CI/CD.

Well, since I met [CircleCI](https://circleci.com/), I have never desired to change to any other provider.

Why would you need a CI/CD provider in the first place? Let me give you an example in form of a story. Two stories.

A few months ago, I made a website for a client. It was a static website. I used Hugo.

In the past, I had always relied on Github + Netlify, where I would push the code to Github and Netlify automatically builds the website and redeploys it. It had always been my default way of making the websites.

However, in this case, the client already had an FTP server. So, I had to manually upload the changes using Cyberduck every time I make changes and want to update the website (Cyberduck is a very nice FTP server manager. It does many other things too, but its excellent for FTP). After a few tedious manual rounds, I decided to try CircleCI.

I uploaded the code to Github and then connected the repo to CircleCI. With just a few lines in the config, CircleCI was able to build the website and publish the changes to the FTP server within a minute each time I pushed changes to Github.

Another instance was when I wanted to make changes to a project I made a few months ago. I only had the code backed up on Github, but since I was using macOS yet I wanted to build for windows, it was a problem.

I cloned the repo, made the changes and then pushed the updates back to Github. I had configured CircleCI to build for Windows. I then just waited for build to complete so I could download the Windows executable. All under 5 minutes.

I explained the process in detail in the article **[How to Build Your Electron Project Using CircleCI](https://dev.to/elevatika/how-to-build-your-electron-project-using-circleci-1982)**.

## Amazon S3 Object Storage

Amazon S3 is a cheap storage for images, documents, videos, and many other types of files. It is so cheap, except if you have to download the objects every now and then. But still, many companies choose to go with it, mostly to store images they use on their web applications.

You can also use it as a backup. Cheap backup!

## Conclusion

I hope you found this article insightful. Generally, I never stop evaluating web technologies and platforms to hit the sweet spot when it comes to value for money. Feel free to give me feedback via twitter `@elevatika`.

I will update this article as I keep exploring.
