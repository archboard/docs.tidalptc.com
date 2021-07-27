---
title: Authentication
date: Last Modified
permalink: /authentication/
metaDescription: Log in to Tidal PTC.
eleventyNavigation:
  key: Authentication
  order: 100
  title: Authentication
---

Before you can start using Tidal PTC, you need to log in. You don't have to create any special account for Tidal PTC because it uses your PowerSchool account to create your user account and log in.

First, you'll need to log in to your PowerSchool server, either as a teacher, admin or guardian. Once you log in, click on the Applications launcher in the top right of the page.

![PowerSchool application launcher](/content/images/application-launcher-button.png)

After clicking the launcher button, a menu will slide out from the left. Click on Tidal PTC to log in to the app.

![Click on Tidal PTC to log in](/content/images/application-launcher.png)

The process is the same for teachers, admins, and guardians.

### A note about usernames

In PowerSchool, a username can be pretty much anything. It can include spaces and special characters. While this is convenient in PowerSchool, it doesn't always work well with SSO functionality. The reason a username with something considered a "special character" (e.g. a space) doesn't work well is because when PowerSchool sends over details, special characters have to be [URL encoded](https://www.urlencoder.io/learn/).

PowerSchool does not do a good job at this, and the username it sends Tidal PTC is invalid and fails the SSO authentication flow. If a user is communicating a failed SSO, the first thing to do is to check the username of the staff or guardian. Changing the username to something like an email address will likely fix the issue and is a norm when it comes to having unique usernames in web applications, such as Tidal PTC.

## Using a username and password

Depending on your district's setup, you may also be able to use your email and a password you configure for your Tidal PTC account. After you have created a password for your account, you may be able to use this method without having to log in to PowerSchool first.

## PowerSchool Single Sign On (SSO)

If you have a PowerSchool version of 20.11 and above, you can also log in to PowerSchool using the "Sign in with PowerSchool" button on the login page.

![PowerSchool single sign on](/content/images/login-sso.png)

If you're already logged in to PowerSchool as an admin, teacher, or guardian, you will be seamlessly logged in to Tidal PTC. If you're not logged in, you will be prompted to log in as a teacher, admin, or guardian. Once you log in to PowerSchool you will be redirected back to Tidal PTC successfully authenticated.

![PowerSchool single sign on](/content/images/ps-sso.png)