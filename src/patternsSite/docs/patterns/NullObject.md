---
id: NullObject
title: NullObject
tags:
  - NullObject
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - NullLogger

  - EmptyFolder
---

# Pattern:  NullObject

Read online at https://ignatandrei.github.io/patterns/docs/patterns/NullObject

<!-- id : 2 -->
Instead of returning null , use an object which implements the expected interface, but whose method body is empty.
## Purpose of .NET implementation

You want to log data into the application ( with an ILogger interface ).    <br />
You do not want to verify if the logger is null or not before logging.    <br />
You can use the Null Object pattern to provide a default implementation of the ILogger interface that does nothing when its methods are called.    <br />

## Examples in .NET : 


###  NullLogger
```csharp showLineNumbers title="NullLogger example for Pattern NullObject"

namespace NullObject;
internal class LogWithData
{
    ILogger _logger;
    public LogWithData(ILogger? logger=null)
    {
        // If logger is null, use NullLogger.Instance
        // This is the Null Object pattern in action
        _logger = logger ?? NullLogger.Instance;   
    }
    public void DoWork(string message)
    {
        // Even if _logger is NullLogger.Instance, this line won't throw a null reference exception
        // because NullLogger.Instance is a non-functional implementation of ILogger
        _logger.LogInformation($"start work with {message}");
    }
}

```


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

<!-- delete start -->
[Download source](/zipSourceCodes/nullobject.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of NullObject


[SourceCode Directory.GetFiles](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/IO/Directory.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/IO/Directory.cs


## Learn More


[C2Wiki](https://wiki.c2.com/?NullObject) : https://wiki.c2.com/?NullObject   

[dofactory](http://www.dofactory.com/net/NullObject-design-pattern) : http://www.dofactory.com/net/NullObject-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-NullObject) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-NullObject   

[Wikipedia](https://en.wikipedia.org/wiki/Null_object_pattern) : https://en.wikipedia.org/wiki/Null_object_pattern   


## Homework


When retrieving data( e.    <br />
g.    <br />
a Person with ID =-1 ) from a database , return a NullObject instead of null.    <br />
How you will verify that the object is a NullObject?.    <br />


