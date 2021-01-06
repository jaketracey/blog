---
title: "A developer's perspective: the problem with screen reader testing"
date: "2021-01-06T22:40:32.169Z"
---

Screen readers are an essential part of using the web for people who are vision impaired, illiterate or have a learning disability.

Today’s screen readers traverse web pages and applications and read out user interface elements, content and allow users to navigate and interact with the web.

There are many screen readers available for different devices and platforms, each with differing levels of functionality, interfaces and features. The most common are JAWS, NVDA, VoiceOver and TalkBack.

According to the latest [WebAIM Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey8/), when it comes to desktop screen reader usage, JAWS and NVDA are practically equal in usage, with around 40% of respondents reporting that they use one or the other.

<figure>
<img src="/webaim-graph.png" alt="Line chart of primary screen reader usage since October 2009. JAWS has steady decline from 68% to 40%. NVDA has steady incline from 3% to 41%. VoiceOver has a slow incline from 10% to 13%." />
<figcaption>Source: WebAIM</figcaption>
</figure>

Based on the graph above, there’s a clear pattern over the course of the last 10 years, with NVDA usage increasing as JAWS usage drops, culminating in an inflection point in 2019 when NVDA surpassed JAWS usage for the first time.

As a developer regularly faced with time constraints, I have often wondered: what should be the baseline in terms of testing for screen readers, and what browser and screen reader combinations are the most important to cover in order to achieve the greatest level of WCAG compliance?

## An issue of time

Given that almost all web applications developed in 2021 are also used on mobile and therefore require testing on both iOS and Android devices, as well as Windows and macOS  for desktop users, providing adequate support for such a broad range of scenarios becomes quite difficult to manage.

Let’s say in a best-case scenario, a given page or feature will be tested on the following combinations:

* iOS / VoiceOver
* Android / TalkBack
* macOS / Chrome / VoiceOver
* macOS / Safari / VoiceOver
* macOS / Firefox / VoiceOver
* Windows / Microsoft Edge / NVDA
* Windows / Chrome / NVDA
* Windows / Firefox / NVDA
* Windows / Microsoft Edge / JAWS
* Windows / Chrome / JAWS
* Windows / Firefox / JAWS

I should clarify that by “best-case”, I am conveniently leaving out any versions of Internet Explorer, but as frustrating as it may be, including it would add at least another 2 rounds of testing.

It’s also worth noting that WebAIM also recommends using Microsoft Edge with Narrator, but given its low usage, we’ll leave it out (more on this later).

Hypothetically, depending on the size of the functionality or page implemented, let’s say each round of testing takes one hour to complete, assuming the developer has experience with each of these browsers and screen readers.

In this scenario, comprehensively testing screen reader support across all these combinations adds 11 hours of development work – and that’s just to test!

## An issue of fragmentation

Web developers will be familiar with the issues surrounding browser version fragmentation, and this problem is compounded when testing with screen readers. Contending with not only varying levels of HTML, Javascript and CSS support in the browser can be tough, and to combat this, polyfills and tools like [caniuse.com](https://caniuse.com/) have made life a lot easier.

When it comes to screen reader version fragmentation, there is very little in the way of either documentation or support for developers. Fixing issues often comes down to a case of trial and error, retesting and hoping for the best.

A piece of information that would be incredibly useful in this area would be _penetration of screen reader updates_ from the vendors. If, for instance, developers knew that there was a high adoption rate of updates among screen reader users, they could be confident that if a screen reader update resolved an issue, patches for older versions could be sunsetted. This approach has worked exceptionally well for browsers such as Chrome and Firefox.

Sadly, there’s not currently any way for a developer to identify the type or version of a screen reader that is being used, so implementing targeted fixes isn’t an option anyway right now.

## A case for dedicated accessibility testers

Given the scope and time it takes to properly test across so many devices, browsers and screen readers, having dedicated accessibility testers embedded into teams can significantly increase the quality and speed with which properly accessible applications can be produced.

Let’s face it: developers already have a hard time keeping up with the pace of change in their own domain, let alone the level of knowledge required for comprehensive accessibility auditing.

That is not to say that developers should ignore accessibility completely. However, expecting someone to know about a specific bug on a particular combination of code, browser and screen reader is too much, even for the most experienced accessibility-focused developer.

## Why automation isn’t enough

The old saying "a good programmer is a lazy programmer" comes to mind when I think about testing here. Being lazy myself (although possibly not that great of a programmer), I rely on automated tools like [axe](https://www.deque.com/axe/) to do most of my accessibility for me. While the current range of tooling is excellent, and picks up the most obvious issues, when it comes to screen readers there’s no way around it: you need to manually test.

Why? Well, the current state of both browsers and screen reader support is all over the place. To highlight this, the Powermapper website has a neat [list of screen reader support for WAI-ARIA attributes](https://www.powermapper.com/tests/screen-readers/aria/). Not throwing shade at any one – things are continuously improving with updates to browsers and screen readers – but the point stands. Current automated testing tools are not going to catch these problems because they essentially test the validity of code, in much the same way as a code linter does.

## A compromise, so we can all still get stuff done

Not every team has the luxury of a dedicated accessibility tester, or even a dedicated tester for that matter. Sometimes, you just need to do the best you can, with the resources that you have available.

"When can we stop supporting this?" has been the desperate cry of developers for years when it comes to Internet Explorer 9/10 and most recently 11, and as their usage has dropped, so has the rate of developers losing their hair trying to get their code working.

Which brings me back to Microsoft Edge with Narrator, as mentioned earlier. With 1% of users in that survey, and possibly 0% of users for your application or site, is it worth testing on this combination at all? More specifically, what number of users justifies support, and the testing and development overhead that comes with it?

### Windows - Chrome (latest version), NVDA

As of December 2020, Chrome is by far the most popular browser in the world, with 65.3% of users. Later versions of Microsoft Edge utilize the same rendering engine, so there is a high likelihood that if it works in Chrome, it will work similarly in Edge.

Based on the WebAIM stats, it is a safe bet that NVDA will begin to increase its lead over JAWS over the next few years. Given that it is also open-source and free, I can’t help but draw a comparison to the way Firefox overtook Internet Explorer in the 2000s browser wars.

### macOS - Safari (latest version), VoiceOver

Safari is a fair distance behind Chrome in terms of users, with 16.7% share as of writing, but it has the benefit of being the default browser in macOS. It is also free, and the support for accessibility features with VoiceOver is second to none. In addition to this, because of the similarity with its mobile counterpart, most likely any issues that are identified in the desktop version will have similar fixes.

### iOS - Safari (latest version), VoiceOver

Safari is by far the most popular browser on iOS and all other browsers on iOS use the WebKit rendering engine. VoiceOver is the gold standard for mobile screen readers (and the only option for iOS devices), and as such it makes sense to use this combination for testing iOS accessibility.

### Android - Chrome (latest version), TalkBack

In a similar vein to iOS, being the default browser and screen reader combination for Android makes this a simple choice, as it will cover the vast majority of users on this platform. Although manufacturers do include their own browsers and there are quite a few other options on Android, the vast majority of the time they use the inbuilt rendering engine, so the expectation in terms of accessibility should be similar, if not identical, to the Chrome experience.

This is by no means a catch-all solution for everyone. Each circumstance will be different, and the best course of action would be to engage your users and ask rather than trying to make the decision for them.

The reality is that if your site or application’s design or functionality looks bad or works poorly for a large enough number of your users because it does not support the software that they use, it can have potential ramifications to your business, through sales or reputation. Similarly, poor accessibility will have a negative impact if your users are using older versions of screen readers and browser combinations.

## But what about JAWS, ZoomText, System Access, *insert screen reader here*?

At the risk of being slightly incendiary, I dislike the idea of paying for something that I can get for free. NVDA is a project that has brought screen readers to everybody – including those without the financial means to pay for it – so I support it. Along with the clear trajectory of its usage uptake, it is not unreasonable to expect that the majority of users will adopt it in the next 5 to 10 years.

At the end of the day, however, your best bet when it comes to identifying where your testing efforts should be placed is to talk to your users to find out what their needs are and what software they use. If you don’t have access to this information, the proposed testing scope above will suffice for the vast majority of your site or application’s users, and most likely will continue to do so in the years to come.