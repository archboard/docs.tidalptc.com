---
title: System settings
date: Last Modified
permalink: /configuration/system/
metaDescription: Update your Tidal PTC system settings.
eleventyNavigation:
  key: System settings
  parent: Configuration
  order: 35
  title: System settings
---

The system settings shouldn't change too often. You won't have the change the PowerSchool API client ID/secret unless the Tidal PTC PowerSchool plugin gets deleted. Two settings that may change more often are the authentication settings.

Tidal PTC uses PowerSchool for authentication, but can also use traditional username/password credentials. If the "Allow password logins" option is enabled, users can save a password for their account to log in without PowerSchool.

If your PowerSchool is at version 20.11 or newer, there are new SSO features added that make logging in easier. The 'Show "Sign in with PowerSchool" button' option will show a button on the login page that will use PowerSchool's new OpenID Connect functionality.

## Self-hosted settings

The following section only applies to the Self-hosted subscription.

### Email configuration

Tidal PTC sends notification emails, so you will need to have an SMTP account from which Tidal PTC can send emails. You are free to choose the account address and name, but you are responsible for creating the account in your organization's email provider.

After saving the email configuration settings, there is a button towards the top of the page that allows you to test your SMTP settings. It will attempt to send an email to the address associated with your user account.

### School selection and sync

There are two additional options for your district's schools. The "Sync Schools" button will sync each school's details from PowerSchool, such as name and grade information.

The last button on the right will take you to the school selection page, where you can choose to select more or less schools that will be available to use.
