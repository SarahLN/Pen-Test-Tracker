# Welcome to the Pen Test Tracker App

This app allows tracking basic data during a pen test.  It is a work in progress.

## Overview

This app runs locally on a pen test workstation and imports select data into a
database for querying and general organization using a desktop-based GUI.

The app uses the following technologies:

* Electron with React.JS

* MySQL  


At the time of publishing, the following data sources are accepted:

* Nmap Scan data including port, service, and os information (in xml format) - COMPLETE

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

    * pen-test-tracker/src/components/db_connection.js lines 7 & 8

    * pen-test-tracker/src/python/pentestdbconn.py line 9


4. Create the database schema, tables, etc. - This can be done by running the [create_db.sql](./docs/create_db.sql) script on the database.

5. Install Python - This app was built and tested with Python 3.6.5.  The following packages are required:

    * NmapParser

    * sqlalchemy

    * pandas

Once all of these dependencies have been installed, the app can be run by downloading
a local copy of the git repository and running
```shell
electron-forge start
```
This will allow the app to run locally on your system.

## Getting Started in the App

#### First Time Use Setup

Upon launching the app for the first time, navigate to the settings page to set
some basic user settings by expanding the menu in the upper left corner and
selecting settings.

Once on the settings page, enter a folder that should be used for receiving pen
test data.  This should be a full path.  Then click submit.  You will receive a
pop-up alert if this was successful.  Now the app is ready to be used.

#### Ingest Data

To ingest data into the database, take a file with output from a supported tool
in a supported format (described in the Overview section) and copy the file to
the folder location provided in the settings.  Once the file gets moved to the
archive folder, the data has been ingested.

#### Interacting with the GUI

Searching the GUI can be done by clicking the magnifying glass icon in the upper
right corner.  This search takes any value and searches all fields for that value.

More specific filters can be applied by expanding the icon with 3 horizontal bars
on the upper right corner.  This shows various multi-select filters which can also
be applied.

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
