---
title: Self-hosted setup
date: Last Modified
permalink: /setup/self-hosted/
metaDescription: Get your self-hosted subscription set up and installed.
eleventyNavigation:
  key: Self-hosted setup
  parent: Intro
  order: 15
  title: Self-hosted setup
---

## Server requirements

Self-hosted Tidal PTC gives you the flexibility and performance benefits of your own hardware. Installation is as simple as running a single command, but first the server has to be created. Below are the requirements for installing and running Tidal PTC:

- Ubuntu LTS 20.04
- A publicly accessible IP address. This allows Archboard to manage installation and updates for you.
A domain name and DNS ready. You will need your domain name to point to your IP address using an A DNS - record. DNS records can take up to several hours to be fully propagated.
Depending on your district size and anticipated load, Tidal PTC only needs 1GB memory/25GB disk/1 CPU, but - 2GB memory and 2 CPU is preferred.
- SSH access through port 22.
- It's not a requirement, but it's a good security practice to limit access to the server by SSH key only.

## Installation

Once you have purchased the Self-Hosted plan, you will need to provide a few details to get your subscription up and going. The following steps match each step in your Archboard subscription instructions page.

Before getting started, you'll need to make sure you have your DNS configured correctly. This varies depending on your own server setup, but typically it will be an "A" DNS record that has the value of a domain/subdomain that you own. The earlier in the process this is done, the better due to the delay that DNS can have to fully propagate the updated record.

1. The first thing you'll need to provide is the domain and IP address of the server on which you wish to install Tidal PTC. This is done to verify your license with the IP of the server. If your license and the servers IP address matches, your server can install and update Tidal PTC.

    If your server is behind a proxy, make sure the `x-forwarded-for` header value is set correctly.

2. The next step is installing Tidal PTC on your server. You will need to SSH into your server as the root user so everything can be installed correctly.

    After logging into the server, copy and paste the command shown into the command prompt. This will run a script that installs all the dependencies, the Tidal PTC application, as well as a free SSL certificate provided by [Let's Encrypt](https://letsencrypt.org/).

    The entire installation will take about 15 minutes, but could be more or less depending on the hardware and network capabilities. You will be notified via email when it is finished. While the script is running, you can install the Tidal PTC plugin in PowerSchool.

3. You will need to download the Tidal PTC PowerSchool plugin. There are two options for plugins, depending on your version of PowerSchool. Version 20.11 of PowerSchool introduced a new way to authenticate using single sign on (SSO). After downloading the appropriate version, you can [install the plugin](/setup/plugin-install/) on your PowerSchool version.

4. Once the installation of Tidal PTC on your server and the installation of the PowerSchool plugin is finished and enabled, you need to finish the Tidal PTC application configuration. Visit `https://[your-tidal-ptc-domain]/install` to complete installation.

    For your convenience, your Archboard subscription instructions page will display some of the information needed on the Tidal PTC installation page, such as license and PowerSchool API details. Once the initial data is saved you will be asked which schools from your PowerSchool instance you would like to integrate into Tidal PTC.

    Saving the selection will automatically pull in the student, teacher and enrollment information. Self-hosted has additional configuration needed before you're fully ready.

## Configuration

After saving the school selection, you will be taken to Tidal PTC's district/tenant settings. These settings apply to all the schools on your Tidal PTC server. Users with the `district admin` role can edit the system settings.

### System settings

The system settings shouldn't change too often. You won't have the change the PowerSchool API client ID/secret unless the Tidal PTC PowerSchool plugin gets deleted. Two settings that may change more often are the authentication settings.

Tidal PTC uses PowerSchool for authentication, but can also use traditional username/password credentials. If the "Allow password logins" option is enabled, users can save a password for their account to log in without PowerSchool.

If your PowerSchool is at version 20.11 or newer, there are new SSO features added that make logging in easier. The 'Show "Sign in with PowerSchool" button' option will show a button on the login page that will use PowerSchool's new OpenID Connect functionality.

### Email configuration

Tidal PTC sends notification emails, so you will need to have an SMTP account from which Tidal PTC can send emails. You are free to choose the account address and name, but you are responsible for creating the account in your organization's email provider.

After saving the email configuration settings, there is a button towards the top of the page that allows you to test your SMTP settings. It will attempt to send an email to the address associated with your user account.

### School selection and sync

There are two additional options for your district's schools. The "Sync Schools" button will sync each school's details from PowerSchool, such as name and grade information.

The last button on the right will take you to the school selection page, where you can chooose to select more or less schools that will be available to use.
