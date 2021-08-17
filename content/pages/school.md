---
title: School settings
date: Last Modified
permalink: /configuration/schools/
metaDescription: Learn how to configure schools for Tidal PTC.
eleventyNavigation:
  key: School settings
  parent: Configuration
  order: 25
  title: School settings
---

If your user account has the `Change school settings` permission, you can manage the settings for the school. You can find the settings for the school by clicking the name of the school on the settings drop down.

![School settings link](/content/images/school-settings-menu.png)

If your Tidal PTC instance has multiple schools and you are an admin for multiple schools, the first section will to change your current school.

The next option is the default timezone for your school. This is helpful for when teachers don't have a configured timezone.

## Availability settings

The availability settings allow teachers and guardians to create and reserve time slots. For teachers, this is a simple option of allowing teachers to manage their own time slots. If this option isn't enabled, admins will create time slots on behalf of the teachers.

Guardians' availability has more options for better control on when they can reserve time slots. It's important to save the school's timezone before configuring an opening and closing time.

- If no open or closed time is set, guardians can reserve time slots at any time.
- If an opening time and no closing time is set, reservations will be open any time after the configured opening time and will never close.
- If no opening time and a closing time is set, reservations open now and will become unavailable after the configured closing time.
- If both an opening and closing time is set, reservations can only be made by guardians between the configured times.

## Translator settings

If your conferences utilize translators, Tidal PTC and help you assign and organize translators to reserver time slots. The first option allows guardians to request a translator. Disabling this option will remove the ability for translators to be requested when reserving time slots.

The next section contains the configuration for the available languages that can be requested. Selecting a language from the options will add it to the list of available languages. For each language, there are additional settings that can limit the requests for the given languages.

- Maximum requests allowed for the language - This option limits the total number of requests that can be made for the given language. If there is not limit, leave the field empty.
- Maximum requests allowed at the same time - This option limits the number of overlapping slot reservations that can be made for the given language. This is useful if your translators are limited.

## Additional settings

There is a link to [manage users](/configuration/users/), sync data from PowerSchool for the school, and edit the [system settings](/configuration/system/).

## Data sync from PowerSchool

Running the school's data sync will pull data from PowerSchool:

- School information (name, grade range, etc)
- Students (having `enroll_status` equal to `0`)
- Courses (name and number)
- Sections
- Student section enrollment (active at the time of sync)
- Teachers who are the **lead teacher** on a section
