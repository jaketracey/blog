---
title: The best web accessibility tools for developers
date: "2020-12-24T22:40:32.169Z"
---

The quality of the tools you use defines the speed with which you can diagnose and resolve problems. 

Each year the landscape changes dramatically in web technologies, and of late the tooling for accessibility is no exception.

I’ve divided this article into 4 categories - resources, development tools, continuous integration and screen readers.

## Resources

These are the pages that I keep bookmarked for reference and to learn new techniques.

* [Mozilla Accessibility Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [W3C WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [Smashing Magazine - Accessibility](https://www.smashingmagazine.com/category/accessibility)
* [CSS Tricks - Accessibility](https://css-tricks.com/tag/accessibility/)

There are a number of great accessibilty blogs on the web which I suggest browsing - a good jumping off point is available at [Digital A11y](https://www.digitala11y.com/accessibility-blogs/).

## Development tools

* [axe](https://www.deque.com/axe/) - axe has quickly become the defacto standard for automated accessibility testing. Deque's axe-core testing engine provides the under the hood implementation for most common tools, and they also provide a free Chrome extension that quickly identifies any in page errors for most common issues while providing guidance on how to resolve them. Definitely my first port of call when testing any new code. 

* [pa11y](https://github.com/pa11y/pa11y) - pa11y is an automated testing tool based on axe-core that can be run on your development environment as part of your commit hooks or front-end build pipeline. It's extremely configurable so you can run automated tests for different accessibility standards and viewports, ignoring specific WCAG rulesets as well as triggering actions on pages as a part of your test suite. @f3igao's wonderful blog post, [How to automate web accessibilty testing](https://medium.com/@f3igao/how-to-automate-web-accessibility-testing-921512bdd4bf) is a great starting off point if you are looking to fully integrate pa11y with your front-end build.

* [DomainAccessibilityAudit](https://github.com/MSU-NatSci/DomainAccessibilityAudit) - I found this tool while researching ways to test an entire website for a11y issues and this was a perfect fit. You can feed it a root URL to start testing on and it will scrape all links on all subsequent pages and perform an audit, essentially crawling the entire site and producing a report of a11y issues. You can also input a sitemap.xml if you want to test a specific set of pages instead of crawling the entire site.

* [Accessibility insights for web](https://accessibilityinsights.io/docs/en/web/overview/) - Microsoft's commitment to accessible technologies shines with their free Chrome extension and provides another useful interface to the axe-core framework. 

* [Siteimprove Accessibility Checker](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc) - The Siteimprove browser extension provides one of the most comprehensive interfaces to resolving issues with detailed reccomendations on how to fix them. Highly recommended to keep in your toolbox.

* [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Don't have time or access to install software to run a quick a11y check? Lighthouse comes built in with Chrome DevTools and provides a fast, easy to understand issue checker that integrates perfectly with the Chrome browser. It also offers other suggestions in terms of improving page performance, server configuration and insights into using progressive web applications.

## Continuous integration

Catching issues before they are in production is one of the major benefits of adding accessiblity tooling to your CI pipeline. Recently there has been huge progress in the ease of integration and reporting in this space, which I expect will continue to improve over the next year.

* [pa11y-ci](https://github.com/pa11y/pa11y-ci) - A set of command line tools for pa11y, pa11y-ci gives you the oppurtunity to run your suite of pa11y tests on your CI server. 

* [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) - If you're looking to run a comprehensive set of tests in your CI environment, lighthouse-ci brings all the power of Google's Lighthouse app to the table. In addition to it's accessibilty checks, lighthouse-ci will report on your app's performance, SEO and best practices in one of the most polished standalone reports available.

## Screen readers

* [JAWS](https://www.freedomscientific.com/products/software/jaws/) - JAWS is the most popular and oldest screen reader that is still in use. It represents a huge proportion of screen reader users so it is an essential tool when testing for issues. 


* [NVDA](https://www.nvaccess.org/about-nvda/) - NVDA is my screen reader of choice for testing because it's open source and free. It's also updated quite freqently and in my experience, has less quirks than JAWS. I expect in the coming years NVDA will overtake JAWS in terms of popularity, so if you were to pick one to learn, NVDA would be it.



* [VoiceOver](https://help.apple.com/voiceover/info/guide/) - VoiceOver is the defacto standard for screen readers on iOS and Mac OS X. It is extremely easy to use and the documentation is incredible. The vast majority of screen reader users on mobile are using VoiceOver so it is the most important tool you can use if a mobile audience is your primary demographic.

* [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en) - TalkBack is the Android OS screen reader. Similarly to VoiceOver, when developing for the mobile web, it is essential to test using TalkBack. Unfortunately, the OS version fragmentation on Android devices varies wildly, so it may be best in your particular scenario to test using a couple of versions older than the latest Android OS when conducting audits using TalkBack.

I hope you find this list helpful - each year I will add an additional update with any new tools I have discovered, and provide any comments on how the landscape is progressing.