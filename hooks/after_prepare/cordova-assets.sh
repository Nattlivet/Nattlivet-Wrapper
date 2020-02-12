#!/bin/bash
pwd
./node_modules/cordova-icon/bin/cordova-icon --config=config.xml --icon=www/appicon.png
./node_modules/cordova-splash/bin/cordova-splash --config=config.xml --splash=www/appicon.png
