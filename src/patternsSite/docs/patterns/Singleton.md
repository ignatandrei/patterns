---
id: Singleton
title: Singleton
tags:
  - Singleton
  - https://github.com/ignatandrei/patterns

  - creational

  - design pattern

  - Singleton
---

# Pattern:  Singleton

Singleton pattern restricts the instantiation of a class to one object. It is used when you want to have one instance of a class that is shared across the application.

## Example in .NET : 


###  Singleton
```csharp showLineNumbers title="Singleton example for Pattern Singleton"
using System.Data.OleDb;

namespace Singleton;
/// <summary>
/// 
///sealed class Singleton
///{
///    private Singleton() { }
///    public static readonly Singleton Instance = new Singleton();
///}
///
/// </summary>
internal class SingletonDemo
{
    public static void GetFactory()
    {
        //cannot do new
        //OleDbFactory factory=new OleDbFactory();
        //get singleton instance
        OleDbFactory factory = OleDbFactory.Instance;
    }
}

```


[Download source](/zipSourceCodes/singleton.zip)



## See Source Code for Microsoft implementation of Singleton

    <a href="https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/OleDb/OleDbFactory.cs" target="_blank">SourceCode OleDbFactory.Instance</a>
    <br />


## Learn More

    <a href="https://wiki.c2.com/?SingletonPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/singleton-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-singleton" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank">Wikipedia</a> <br />


## Homework

Implement a singleton that will allow you to create a single instance of a logger that logs to a file and to a console.

