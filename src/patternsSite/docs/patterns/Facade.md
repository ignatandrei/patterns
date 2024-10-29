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
Facade is is an object that provides a simplified interface to a larger body of code, such as a class library.
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

<!-- delete start -->
[Download source](/zipSourceCodes/facade.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of Facade


[SourceCode DatabaseFacade](https://github.com/dotnet/efcore/blob/3163cb9a0677f94bd986dcdbe3d6026d4f743c73/src/EFCore/Infrastructure/DatabaseFacade.cs#L15) : https://github.com/dotnet/efcore/blob/3163cb9a0677f94bd986dcdbe3d6026d4f743c73/src/EFCore/Infrastructure/DatabaseFacade.cs#L15


## Learn More


[C2Wiki](http://wiki.c2.com/?FacadePattern) : http://wiki.c2.com/?FacadePattern   

[dofactory](http://www.dofactory.com/net/facade-design-pattern) : http://www.dofactory.com/net/facade-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-facade) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-facade   

[Wikipedia](https://en.wikipedia.org/wiki/Facade_pattern) : https://en.wikipedia.org/wiki/Facade_pattern   


## Homework


Implement a Facade that will allow you to display a question in a MessageBox with a single method call in a console application and return yes/no as a result.    <br />


