---
title: Configuration
date: Last Modified
permalink: /configuration/
metaDescription: Configuration is fast and easy with Tidal PTC.
eleventyNavigation:
  key: Configuration
  order: 20
  title: Configuration
---

Tidal PTC only has a few areas that need to be configured, but given the nature of time and timezones, are very important to do. For admins, check out [system](/setup/self-hosted/#configuration) and [school settings](/configuration/schools/). Everyone has personal settings that need to be configured to make sure Tidal PTC works as desired and expected.

![Settings](/content/images/settings.png)

Access your settings by clicking on the cog icon in the top navigation.

## Personal settings

Your name and email are synchronized from PowerSchool. If you need to change those details, check out the [instructions](/authentication/data-sync/#what-happens-if-your-email-changes%3F) on the data sync page.

## Meeting information

The meeting information settings are critical to how Tidal PTC functions for your account. The settings differ based on whether you are a guardian and/or a teacher.

Everyone has a timezone setting. The first time you log in, you will be redirected to your settings page to set your timezone. It guesses your timezone based on your browser. If it's correct, you can save your settings. If it's incorrect, find and select the correct timezone.

The other universal setting is your time format settings. You are given the choice between 12 or 24 hour time display. An example of 12 hour time display would be `3:00pm`. The same time in 24 hour time display would be `15:00`.

### Additional teacher settings

Teachers have additional settings that are specific to their time slots preferences.

- Room number - This setting is pulled from PowerSchool `homeroom` attribute. It can be changed manually here and will not be overwritten.
- Meeting URL - This is the default meeting URL that can be assigned to all time slots that will meet online or have the possibility to meet online. This can be overwritten on each time slot created.
- Booking open - Teachers can prevent reservations on their time slots by unselecting this option.

## Notification preferences

Guardians and teachers can fine-tune their notifications that are sent via email.

### Guardians

Guardians have options specific to making and updating reservations. There is also an option for the number of hours to send a reminder email about upcoming reservations. If the option for receiving reminders isn't enabled, this option will not be relevant.

### Teachers

Teachers' settings revolve around when their time slots get reserved or updated.

## Password settings

If your server allows password authentication, this is where you can set your password. If you leave the password field empty, it will not modify/assign your password.
