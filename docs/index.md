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



## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
