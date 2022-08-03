# MAVERICK
## The Ultimate Generic RPG Management System
---

Maverick is a solo project of mine that aims to ultimately be the generic tabletop RPG management tool for every party.
Being fully customizable, it envisions that anyone can import a set of rules (called "System Modules") in which the players and DMs can have a single point of sharing information about the table being run.

## Motivation
The main reason I've decided to start developing this tool is because I'am in love of RPG games for a long time. In my programming career, I've always tried to bring this hobby to my personal projects.
The initial ideas and drafts for Maverick are all in my Github history, as of attempts to bring this idea of a large management system for tabletop RPGs. Some of those even precede some of the other VTTs and Companions created afterwards.

All of those ideas were just steps in my knowledge about programming, and each of them has its unique quirks, being a language I was learning, a framework, a database or even a design pattern.

Now, I'm seeing myself as sufficiently knowledgeable to try out and make it by my own. 

### What Maverick is?
- A fully customizable management tool for your tabletop or virtual RPG group
- A way to track and share information between DM and Players
- A sheet management app

### What Maverick is NOT?
- It's not a VTT
- It's not an interactive solo storytelling game (like some adventure books and text-based games)
- It's not a substitute for any oficial playbook of any RPG system

## Technologies
- Backend: Typescript Nodejs + Express + Socket.io
- Web Frontend: Typescript React with Vite
- Mobile App: React Native OR Flutter (not decided yet)
- Database: MongoDB (Probably)

## ROADMAP

This is a tricky section. The Roadmap is always evolving and changing, but I'll always try to not fall for the temptation of scope creep (again).
With this in mind, I will focus on list everything I want to do with the project in a resumed way, and with each iteration those features could be cut out, or new ones could emerge.
This roadmap at first won't be a stone written, step-by-step features to be added, but a collection of the features I want to put. Later I'll set those in order of implementation.

### Backend (maverick-api)

#### Basic
- Account creation
- Authentication + Authorization

#### Room Specific
- Creation
- Player invitation
- Socket connection handling
- Session 
- Player Ban
- Information Sharing
-- Through notification/socket, DM can send a Handouts to all players to be received in its apps

#### System modules
- Import
- Creation
-- Name, version, template sheet and abilities
- Editting
- Sharing
-- Way to export (as JSON) to be importted by others

#### Character Sheet
- Creation (both DMs and Players)
-- Using Room's System module template
- Editting (Players by App, DMs by Web Manager)
-- Updating through Socket
- Deletion (by owner)


