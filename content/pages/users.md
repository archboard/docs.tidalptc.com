---
title: User management
date: Last Modified
permalink: /configuration/users/
metaDescription: Tidal PTC offers fine-tuned controls over user permissions and user management.
eleventyNavigation:
  key: User management
  parent: Configuration
  order: 30
  title: User management
---

User management is a way to edit a user's roles and permissions, as well as update settings for the user without them having to log in and change the details themselves. This is useful if the teachers have a more passive role in Tidal PTC and an admin does the work of creating time slots for on behalf of teachers.

You can get to the user management page by finding the link towards the bottom of your school's setting page or by clicking the link at the top of the Teachers page. You will need the `Manage users` permission to see and access the user management page.

![User management link](/content/images/users-link.png)

Once on the page you will see a table of all your school's users, which includes admins, teachers, and guardians.

## Mass-assign notification preferences

At the top of the page there is a button to manage notification preferences for all users.

![Notification preferences button](/content/images/notification-preferences-button.png)

Clicking this will launch a modal with a listing of all the notification possibilities when it comes to time slots for both teachers and guardians. Modifying these preferences will apply to **all** teachers and/or guardians for your school. An example would be to unsubscribe from all notifications for time slots and time slot reservations. Once saved, all users will have the given preferences.

After modifying these preferences for users, a user may still log in and modify their own personal notification preferences that are found on their settings page.

## Editing a user

The right column on each row of the table will have an edit link. Clicking the link will launch a modal with the ability to modify different aspects of a user's account.

![User detail modal](/content/images/user-edit.png)

![User detail modal](/content/images/user-settings.png)

1. The first option is an "Account enabled" option. When this is disabled, the user will:
    - Not be able to log in to Tidal PTC
    - Not appear on the teachers page and therefore cannot assign time slots
    - Not appear on the list of teachers for which guardians can reserve time slots

    This essentially is like deleting their user account without actually deleting it.

2. The second section allows you to assign a timezone and meeting URL for the teacher. You may save the room number in PowerSchool using the `homeroom` field. After syncing the school the user will have a room number as well.

3. The roles section determines which role they have in Tidal PTC. If your user account is a district admin, then you can also assign this role to other users. This will give them **full access** to the system.

4. A district admin will automatically be able to perform all tasks and therefore will not need to be assigned permissions. However for a more granular approach, you may assign permissions individually to users to perform various tasks in the application. These permissions are given for the school.

5. Lastly, you may modify the user's notification preferences depending on the user type they are.
