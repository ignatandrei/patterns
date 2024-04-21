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





## See Source Code

    <a href="https://github.com/dotnet/efcore/blob/3163cb9a0677f94bd986dcdbe3d6026d4f743c73/src/EFCore/Infrastructure/DatabaseFacade.cs#L15" target="_blank">SourceCode DatabaseFacade</a>
    <br />


## Learn More

    <a href="http://wiki.c2.com/?FacadePattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/facade-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-facade" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Facade_pattern" target="_blank">Wikipedia</a> <br />


## Homework

Implement a Facade that will allow you to display a question in a MessageBox with a single method call in a console application and return yes/no as a result.

