---
path: why-some-websites-do-not-work-opera-mini
date: 2019-07-25T05:37:58.944Z
thumbnail: /assets/opera-mini.jpg
title: Why Some Websites Do not Work on Opera Mini
description: Sometimes you login to a website using Opera Mini and you are happy. Other times it just does not work. Here is why.
author: Mike CK
categories:
  - Technology
---

Opera Mini is a cool web browser for slow connections for a good reason. It loads web pages extremely fast in those cases.

This happens because the websites are loaded via Opera servers which compress the Web pages before they send them to you.

That's probably what you know. However, maybe you don't know about all the aspects of compression that come into play to make the web pages you browse that fast and small.

> FYI: most websites are beautiful, don't let Opera Mini fool you. ☺

## What Makes up a Web Page

A web page you load using your web browser is mostly showing you the following components:

- Text
- Images
- Videos

However, internally, most of those Web pages include other parts that only the browser sees, that is, the code:

- HTML
- CSS
- JavaScript
- web fonts

Now, you're asking yourself, why is this relevant?

Well, for simplicity, let's call the first category **content** and the second category **code**

The **code** determines how the **content** is displayed. For example, when you view your emails in Gmail on a desktop Web browser, what you see are pieces of text and images.

However, there is code that handles what happens when you click the **compose** button, for example, and that is **JavaScript.**

There is also code that designates which bits of what you see is text, which bit is an image, which bit is a button and so on. That is **HTML.**

The emails are attractively laid out on the page. Now, when you click the **compose** button, there is a beautiful modal showing you a place to add your message and the email address of the receiver. There is even a beautiful animation while closing and opening the compose view. That is **CSS** code in action making the page beautiful.

## Normal Web Browsing Flow

When you fire up your browser and type a Web address, the browser makes a request to the particular server associated with that address.

The web server responds with the web page, which is made of content and code.

The browser then evaluates the code in order to determine how to display the content.

So, each part of this process takes a little time:

There's a time taken by the browser's request to reach the web server, there's a time taken for the web server to understand the request and send a response, there's a time taken for the web server's response to reach the browser, and then there's the time taken for the browser to evaluate and understand the code in order to display the content.

## How Opera Mini Works

Opera Mini delegates the work of evaluating the code to the Opera servers. That means that when you type a Web address in Opera Mini, a request is made via the Opera servers.

The Opera servers then go ahead and request the web page, evaluate the code, compress it, and send the 'compressed' page to Opera Mini.

Opera Mini then displays the results fast because the page has been evaluated and compressed by the server.

This flow saves data because Opera servers reduce image sizes, remove unnecessary code and even strip unsupported elements from the page such as web fonts. Thus, a web page that would otherwise be, say 2MB, ends up becoming something like 200KB.

Those are enormous savings in data usage and time taken to load the page in case of slow connections.

That's is why all websites look almost similar on Opera Mini.

Now, this flow is problematic for JavaScript. Let's look at modern websites.

## Modern Websites

Modern websites use JavaScript, a lot. The Gmail example we looked at uses it too. And thus, when you try to use Opera Mini to load such a page, you automatically lose some of the functionality, such as beautiful animations and modals.

Also, modern websites use beautiful fonts. The code is not just plain HTML, CSS and JavaScript anymore. Web fonts are included. These fonts are not supported on Opera Mini.

## Why do Modern Websites Require JavaScript?

To be fair, not all modern websites require JavaScript. However, most of them do.

For example, while registering an account with a website, just when you start typing your username, the website might start searching it's database to see if your username is taken. This is JavaScript in action.

Also, web applications such as those that allow live chatting want you to send and receive messages without having to reload the page. The same happens while sending and receiving emails; you don't have to reload Gmail to do that. It just happens.

Thus, generally, web applications require JavaScript to enhance user experience and also to allow advanced features.

Such functionality is not possible while using Opera Mini.

## The Compromise

The middle ground between browser support and features is hard to establish. That is why you find some websites don't work at all on Opera Mini while some decide to support limited amounts of features.

Opera Mini users might account for just a small percentage of total website traffic and thus the owners of the websites or web applications might not want to compromise features in order to accommodate Opera Mini users.

Gmail on Opera Mini, for example, works. But you lose many features.

YouTube, on the other hand, is a complete nightmare.

## When not to Use Opera Mini

If you are on at least a fast 3g connection, that is HSPA connection that shows up as H+ next to your network signal, and have a decent smartphone with Gbs of RAM, avoid Opera Mini by all means. You are denying yourself great Web browsing experience and features. Oh, and Opera Mini decided to include ads, which is a terrible experience.

In fact, if you are in a fast connection, you will find that websites load faster on other browsers as opposed to Opera Mini . This is because while using other browsers, you connect directly to the Web servers, no servers intercepting your connection.

Also, if you are doing something sensitive, like online payments, sending your data through a third party is not wise.

Another reason is if you realise that the website you are visiting is not showing well, ditch Opera Mini for something else, something better for that situation.

## Conclusion

When you are on a slow connection or low on data, it's makes sense to use Opera Mini.

However, if you want a good experience, it's time you switched to something like Chrome or Firefox to enhance your Web browsing experience.
