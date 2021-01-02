---
title: Accessible virtual reality takes its first steps
date: "2020-12-31T22:40:32.169Z"
---

One of the promises of virtual reality is the ability to bring to life worlds that would never have been possible using technologies from the past. The speed with which VR has progressed in visual and auditory fidelity has outpaced the web in many respects and with the announcement of 
a high level [set of accessiblity guidelines](https://developer.oculus.com/blog/introducing-the-accessibility-vrcs/) when publishing VR apps on the Oculus store, the speed with which a fully accessible VR future is becoming viable is increasing.

Given that VR is primarily a visual medium there is no requirement for the application to function for completely non-sighted users. There are, however, welcome additions to provide assistance for those with hearing, mobility and visual impairments.

## The guidelines

Oculus has created a set of [Virtual Reality Check (VRC) Guidelines](https://developer.oculus.com/distribute/publish-quest-req/) which I will break down below. Currently the guidelines are suggested for Quest applications only - in the future we will possibly see a similar set for other headsets.

### The app should be playable without audio.

Although not a requirement, it is recomended to ensure that the application is playable entirely without the use of audio and to provide subtitles for dialogue and sound effects that are played to the user.

This alone should increase the usability of all VR apps for those with hearing issues and I would hope that this guideline becomes a requirement and an API created to communicate audio cues via haptics or a consistent visual interface. 

### Text and in-app controls and elements necessary for app progression should be clearly legible.

This recomendation is not paired with any specifics and as such is open to interpretation. The guideline does suggest that when possible, options to increase contrast or the size of the UI should be available. This guideline could be improved by adding additional details such as what contrast ratios for text and UI elements is sufficient to provide an accessible experience to users with lower visual acuity.

### The app should provide clarity and direction to the user through a combination of visual, audio, and/or haptic feedback when possible.

Removing a reliance on one form of feedback is a good step to providing a more accessible experience for users without access to that medium. This guideline is perhaps one of the most important as it impacts users across the spectrum of input methods - in order to maximize the number of users that can fully experience an application, providing a system wide menu where a user could choose between a number of feedback methods that work best for them with an API so that developers can switch between them would promote a high level of consistent adoption across applications for this feature. Having a user repeatedly choose which feedback methods are preferable to them in each application would be a tedious process and potentially lock users out from using applications so it would be a huge win to have this at an OS level.

### The app should provide an option to be played with one hand and/or controller.

An essential feature for those without the use of multiple hands - although I cannot see this being a requirement in the future given the nature of many applications, suggesting options such as the ability to switch hand position using one controller while keeping the other hand in place could provide some direction for developers as to how to make their experiences more compatible with one handed users.

### The app should enable people to edit their display settings such as brightness and contrast to accommodate their visual needs.

Another recomendation that would be useful to see as an operating system level setting or a per-app setting on the OS level. 

### The app should either provide color blindness options, or use other techniques such as combining color and pattern for easy visual distinction.

Supporting users with color blindness is a difficult problem, particularly when objects in the environment and UI are differentiated through the use of color alone. One of the most well known WCAG guidelines for the web is to differentiate interactive elements through the use of non color means, and would be a great requirement for these guidelines in a forthcoming release. Color blindness options in games have become commonplace now and are a good fallback, but as many of my observations in this article mention, controlling these option through a global accessibility UI would go a long way to improve the onboarding experience for colorblind users.

### The app should provide the user with the option to rotate their view without physically moving their head/neck.

For users with mobility constraints but without any other significant accessibility issues this is an essential feature. Many apps offer different ways to control movement in VR already, however a consistent approach across a range of applications would reduce friction for a huge number of users that suffer from neck or back injuries. Eye tracking controls may present a viable solution to this problem in the near future, however the ability to remap controller inputs and/or include additional controller support, e.g. using foot controllers to facilitate movement would mean an accessible experience for these types of users.

### The app should support multiple locomotion styles when possible.

Movement in VR, particularly locomotion has always presented a difficult problem for even experienced, fully capable users. Free locomotion, although for many the most immersive and flexible type of movement is notorious for inducing motion sickness in many people. Teleportation is widely adopted and most applications already support multiple types of movements. Where I think this recommendation could be improved is by expressing the impact to users when utilizing other of types locomotion, for example, by including a line in the description of 'all aspects of the application should be available to the user when using different forms of locomotion'.

### Applications that can be used in sitting or standing mode should provide a setting to enable users to perform all interactions and access information from a fixed position.

Interestingly, this is exactly what this guideline does. Oculus has supported both sitting and standing modes so having a guideline defining specifically that all interactions and information should be accessible from a fixed position is perfect. In the future, I hope that all applications can be used from a seated position with the help of accessible UIs, such as external controllers or eye tracking to faciliate movement and interactions for users with mobility issues. 

## Standards adoption

The adoption of accessibility standards on the web has taken decades to reach a level of adoption where all users can start to expect a usable experience. By taking the first step to providing a set of guidelines, Oculus has taken a giant step forward that should fast track this process for VR developers and users. 

Looking back, one of the key reasons that web accessiblity took so long to get to where we are now was a combination of 3 factors - cost of development, a lack of compatibilty and education. The oppurtunity for Oculus and other VR hardware and software manufacterers to provide a consistent set of accessiblity options through a consistent UI and developer tools is unmistakable.

By expressing the needs of these users in a precise way this tooling can be designed and implemented in a way that makes supporting all users, irresepective of their needs possible by all developers. To address the issue of compatibliity, platforms should work together to design and create these tools and APIs for developers so that all HMDs and VR operating systems offer a consistent accessiblity experience.

I believe the web is for everybody, and similarly I believe that virtual reality is for everyone too. No technology since the web has had the ability to completely change people's lives, offer hope and freedom to the entire world and remove the limitations of our bodies in the same way that VR does. I also believe that people recognise and believe this too in a way that wasn't as commonplace in the early days of the web.

Still, this doesn't mean that there is no room for improvement and by creating VR applications that have the ability to fundamentally improve the lives of those with disabilities we can continue to not only exhibit the transformative nature of VR as a whole, but more importantly, the way that it can bring us closer together, especially for those that have had so many obstructions and challenges in their lives.

