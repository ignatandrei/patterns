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


## Learn More

[Wikipedia](https://en.wikipedia.org/wiki/Singleton_pattern)

## Homework

Implement a singleton that will allow you to create a single instance of a logger that logs to a file and to a console.


