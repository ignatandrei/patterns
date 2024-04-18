---
id: Facade
title: Facade
tags:
  - Facade
  - https://github.com/ignatandrei/patterns

  - structural

  - design pattern

  - Facade
---

# Pattern:  Facade

Facade is is an object that provides a simplified interface to a larger body of code, such as a class library.

## Example in .NET : 


###  Facade
```csharp showLineNumbers title="Facade example for Pattern Facade"
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Facade;
internal class FacadeDemo
{
    public static void ExecuteSql()
    {
        MyDbContext cnt = new();
        //calling the facade
        DatabaseFacade dbFacade = cnt.Database;
        dbFacade.EnsureCreated(); 
    }
}

public class MyDbContext:DbContext
{
    
}


```


## Learn More

[Wikipedia](https://en.wikipedia.org/wiki/Facade_pattern)

## Homework

Implement a Facade that will allow you to display a question in a MessageBox with a single method call in a console application and return yes/no as a result.


