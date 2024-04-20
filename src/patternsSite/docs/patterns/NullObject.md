---
id: NullObject
title: NullObject
tags:
  - NullObject
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - EmptyFolder

  - NullLogger
---

# Pattern:  NullObject

Instead of returning null , use an object which implements the expected interface, but whose method body is empty.

## Examples in .NET : 


###  EmptyFolder
```csharp showLineNumbers title="EmptyFolder example for Pattern NullObject"
using System;
using System.IO;

namespace NullObject;
internal class EmptyFolderDemo
{
    public static void DemoWithCreateNewFolder()
    {
        //start example 1
        var env = Environment.CurrentDirectory;
        var guid = Guid.NewGuid().ToString("X");
        var fldEmpty = Path.Combine(env, guid);
        //create empty folder
        Directory.CreateDirectory(fldEmpty);
        var files= Directory.GetFiles(fldEmpty);
        Console.WriteLine($"files.Length:{files.Length}");
        //end example 1
        
    }
}

```


###  NullLogger
```csharp showLineNumbers title="NullLogger example for Pattern NullObject"

namespace NullObject;
internal class LogWithData
{
    ILogger _logger;
    public LogWithData(ILogger? logger=null)
    {
        _logger = logger ?? NullLogger.Instance;   
    }
    public void DoWork(string message)
    {
        _logger.LogInformation($"start work with {message}");
    }
}

```


## Learn More

        <a href="https://wiki.c2.com/?NullObject" target="_blank">C2Wiki</a> <br />
        <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-NullObject" target="_blank">DPH</a> <br />
        <a href="https://en.wikipedia.org/wiki/Null_object_pattern" target="_blank">Wikipedia</a> <br />

## Homework

When retrieving data( e.g. a Person with ID =-1 ) from a database , return a NullObject instead of null. How you will verify that the object is a NullObject?

