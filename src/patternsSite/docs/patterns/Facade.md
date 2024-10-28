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

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Facade

<!-- id : 7 -->
Facade is is an object that provides a simplified interface to a larger body of code, such as a class library.    <br />

## Purpose of .NET implementation

You are the creator of EFCore that provides ORM capabilities to the developers.    <br />
You want also to have a simplified interface to interact with the underlying database and provide simple methods like EnsureCreated(), BeginTransaction(), etc.    <br />
The Facade pattern provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use by providing a single entry point for common operations.    <br />

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

        DatabaseFacade dbFacade = cnt.Database;
        //calling the facade for create the database
        dbFacade.EnsureCreated(); 
        //calling the facade for begin a transaction
        dbFacade.BeginTransaction();
    }
}

public class MyDbContext:DbContext
{
    
}


```


[Download source](/zipSourceCodes/facade.zip)



## See Source Code for Microsoft implementation of Facade

    <a href="https://github.com/dotnet/efcore/blob/3163cb9a0677f94bd986dcdbe3d6026d4f743c73/src/EFCore/Infrastructure/DatabaseFacade.cs#L15" target="_blank">SourceCode DatabaseFacade</a>
    <br />


## Learn More

    <a href="http://wiki.c2.com/?FacadePattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/facade-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-facade" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Facade_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Implement a Facade that will allow you to display a question in a MessageBox with a single method call in a console application and return yes/no as a result.    <br />


