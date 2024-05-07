# Cloud Design Patterns

## System to implement

Zip As A Service

## Problem

Every time a folder ( maybe on a network share or on a cloud ) is created, it is necessary to create a zip file with the contents of the folder. Then the folder is deleted. This is a manual and repetitive task.

## DDD

Monitor folder - until all files are there 

Send Files to Zip Service

Save the Zip File 

Delete the Folder

Create a notification for the user to follow the operations

## Solution

### Modular Monolith : A single codebase that is modularized into separate projects. Each project is a module that can be developed, tested, and deployed independently. The modules are compiled and linked together into a single executable.

### Microservices : M
