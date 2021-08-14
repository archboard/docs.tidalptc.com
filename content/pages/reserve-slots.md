---
title: Reserving time slots
date: Last Modified
permalink: /time-slots/reserve/
metaDescription: Once time slots are created, it's time for them to be reserved.
eleventyNavigation:
  key: Reserving time slots
  order: 350
  parent: Time slots
  title: Reserving time slots
---

Once the time slots have been configured for the desired teachers, it's time to open reservations so guardians can view and reserve the available time slots. Admins may also reserve time slots on behalf of guardians.

## Opening reservations

To allow guardians to reserve time slots, the school settings need to be enabled, as discussed in the [availability settings](/configuration/schools/#availability-settings). Admins may reserve for students at any time.

## Reserving

For admins to reserve time slots for a student, go to the students page using the top navigation. On the students page, you can search for students by name, email or student number. Clicking the "Reservations" link on the student row will take you to the student's reservations page where you can view and make reservations for the student.

<img alt="Student admin view" src="/content/images/student.png" class="w-full" />

Guardians can head over to the reservations page from the top navigation. On the reservations page, they can select the student for which they want to reserve a time slot. Expanding their name will reveal the teachers for which they are able to reserve slots.

<img alt="Student guardian view" src="/content/images/guardian-student.png" class="w-full" />

Once you find the desired slot you wish to reserve, clicking the time slot will bring up a dialog box where the time slot can be reserved. If the time slot has been configured to allow online meeting requests, an option will be present to request an online meeting.

There will be a field that allows the guardian to write a message to the teacher. This will be displayed with the reservation information.

Finally, if [translator settings](/configuration/schools/#translator-settings) have been configured, an option to request a translator will be available. Enabling the option will reveal the field to select the language for which they need a translator.

<img alt="Reserve a time slot" src="/content/images/reserve-slot.png" class="w-full" />

Once the slot has the desired settings, clicking the "Reserve Slot" button will reserve the slot for that time and teacher. This will also trigger an email notification to the teacher that a slot has been reserved. Guardians will also receive an email containing the reservation details. In both instances a calendar file (`.ics`) will be included to help add to a calendar.

<img alt="A slot has been reserved" src="/content/images/slot-reserved.png" class="w-full" />

A green checkmark will appear next to the teacher's name to indicate that a time slot has been reserved with the teacher for this student. The time slot on the calendar now contains the details of the reservation. You will also notice that you cannot reserve another time slot with the same teacher for the same student. Tidal PTC also detects a guardian's currently reserved time slots and prevents them from reserving other time slots at the same time.