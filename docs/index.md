# Welcome to the Pen Test Tracker App

This app allows tracking basic data during a pen test.  It is a work in progress.

## Overview

This app runs locally on a pen test workstation and imports select data into a
database for querying and general organization using a desktop-based GUI.

The app uses the following technologies:

* Electron with React.JS

* MySQL  


At the time of publishing, the following data sources are accepted:

* Nmap Scan data including port, service, and os information - COMPLETE

* Enum4Linux - Planned

* WHOIS - Planned

* Host command output - Planned

* DNSEnum - Planned


Data is ingested into the app by saving the data to a user-defined folder on
the file system, which is monitored by the app.  When a new file is added,
the app retrieves the file contents, parses and stores the data, and archives
the file for later reference if needed.  Once the data has been parsed and stored,
it is available for viewing and querying in the GUI immediately.

## Installation

This section outlines how to install the app.  Since this is still in progress, there
are many steps, so sorry!

1. [Install Node.JS](https://nodejs.org/en/download/) - This app was built and tested on Node.JS v8.12.0.

2. [Install MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html) - This app was built and test on MySQL 8.0.12

3. Update the database username and password with the values set during install.  
Currently, this must be done manually by updating the following locations:

  1. pen-test-tracker/src/components/db_connection.js lines 7 & 8
  2. pen-test-tracker/src/python/pentestdbconn.py line 9
  

4. Create the database schema, tables, etc. - This can be done by running the [create_db.sql](./create_db.sql) script on the database.

Once all of these dependencies have been installed, the app can be run by downloading
a local copy of the git repository and running
```shell
electron-forge start
```
This will allow the app to run locally on your system.

## Getting Started in the App

Upon launching

## Items Still To Do

The following items are still on the to-do list for making this app better and
more stable.

* Add more data sources (highlighted in Overview)

* Add error checking to make sure that the app doesn't crash the first time
it is used and a data folder hasn't been set yet.

* Store the database connection information in an encrypted config file for
security.

* Add additional configuration items including:

  * Frequency to check the data folder

  * Database connection information

* Make installation a one-click thing
