# GSAT-countdown
![Download Counts](https://img.shields.io/github/downloads/littlecube8152/gsat-cd/total)  
![Showcase](showcase.png)  
A simple GSAT-countdown gadget.  

## Feature
- Simple, good-looking countdown gadget.
- Capable of maintaining multiple events.
- Automatically shows at the top of almost every window, notifying every time.
- It's recommended to go with the task scheduler of your OS so you won't miss any events. 

## Installation
1. Install NW.js: [https://nwjs.io/](https://nwjs.io/).  
2. Download the latest release `gsat-cd.zip`.  
3. Run `nw gsat-cd.zip` and it should pop up the window.  

## Configuration
You can change the cowntdowns by editing `confing/countdowns.json`.  
Each item in the list should coutain `name` indicating its name and `time` indicating the event's UNIX-time (converted to your time zone).  
It is set to change event every `5` second.  
After the change, it **may need a restart**.
