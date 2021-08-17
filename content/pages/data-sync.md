---
title: User data sync
date: Last Modified
permalink: /authentication/data-sync/
metaDescription: Tidal PTC syncs data from PowerSchool after logging in.
eleventyNavigation:
  key: User data sync
  parent: Authentication
  order: 105
  title: User data sync
---

After authenticating using PowerSchool, data is synchronized to Tidal PTC. The data that is pulled into PowerSchool depends on the user type.

Regardless of the user type, your first name, last name, and email are pulled into Tidal PTC. You cannot edit those details in Tidal PTC. If they need to be updated for any reason, do it in PowerSchool and re-sync that information inside Tidal PTC.

A user can be all user types/roles within the application simultaneously. An admin within Tidal PTC could also be a guardian and be able to manage their own personal time slot reservations. A user is any kind of person logging in to the system and can share functionality among all the user types.

This is different than how PowerSchool was engineered. In PowerSchool, your guardian account is a completely different entity compared to an admin user or teacher. What this means is that if a user is both types, they will need to log in using both their admin and guardian accounts for this information to be synchronized to the unified user account in Tidal PTC.

The **email address** is used to find existing users. There are pros and cons of this approach, but was chosen for its flexibility. For Tidal PTC to find an existing admin and/or guardian account, the email address associated with your accounts must be the same.

For admins/staff, the email address is modified on the Information screen of the staff's account. For guardians/contacts, this is done under the **Web Account Access** section of the Contact's details. The account email field is what is given by PowerSchool as the user's email address. If these to email addresses match, Tidal PTC will recognize that the user account is both types.

{% image "contact-email.png" "Contact email address location" %}

## Admins and teachers

Due to a limitation with PowerSchool's new OpenID Connect [identity provider](https://docs.powerschool.com/PSHINTCA/sso-glossary#:~:text=Identity%20Provider%20(IdP)) functionality, the best way to log in for the first time is to use the Application launcher inside of PowerSchool as discussed in [authentication](/authentication/). The reason this method is preferred for the first time is because PowerSchool gives [service providers](https://docs.powerschool.com/PSHINTCA/sso-glossary#:~:text=Relying%20Party), such as Tidal PTC, more information about the user that is logging in. The most important piece of that information is the admin schools for which the user is and admin.

If your subscription is for multiple schools or you are using multiple schools with your Self-hosted subscription, then users who are admins inside PowerSchool will also be given access to the corresponding school inside of Tidal PTC. [Permissions](/configuration/users/) will still need to be assigned after logging in, though.

After the initial user login using the Application launcher is complete, it's perfectly fine to access Tidal PTC using the [OpenID Connect SSO](/authentication/#powerschool-single-sign-on-(sso)) functionality. PowerSchool restricts the ability for plugins to query the admin school relationships manually, for whatever reason. It can only be retrieved using the OpenID 2.0 SSO mechanism found in the Application launcher.

## Guardians

Once a guardian logs in using either OpenID 2.0 ([Application launcher](/authentication/)) or [OpenID Connect](/authentication/#powerschool-single-sign-on-(sso)), the students for which they have access are synced so that the guardian can manage time slots for those students. This is done using PowerSchool's Contact accounts and associating them with students. They are also given the role of guardian within the application.

## What happens if your email changes?

However rare, but still possible for email addresses to change. If this happens, there is a specific order to syncing the email address and preserving your user account.

1. Ensure that you are already logged in to Tidal PTC. If your Tidal PTC instance allows password authentication, then this is less important as you can log in independently from PowerSchool.

    If your Tidal PTC server doesn't allow password authentication, then you will need to log in using PowerSchool **before** changing your email address in PowerSchool.

2. After being logged in, change your email address in PowerSchool.

3. Visit your [settings](/configuration/#personal-settings) and sync your settings. Your email address will then be updated, allowing you to log in using PowerSchool SSO normally.
