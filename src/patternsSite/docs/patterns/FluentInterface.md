---
id: FluentInterface
title: FluentInterface
tags:
  - FluentInterface
  - https://github.com/ignatandrei/patterns

  - behavioral

  -  design pattern

  - FluentInterface
---

# Pattern:  FluentInterface

Fluent interface allows you do have method chaining

## Example in .NET : 


###  FluentInterface
```csharp showLineNumbers title="FluentInterface example for Pattern FluentInterface"

using Microsoft.Extensions.DependencyInjection;
using System.Data;
using System.Data.Common;

namespace FluentInterface;
internal static class FluentInterfaceDemo
{
    public static ServiceCollection AddServices(this ServiceCollection sc)
    {
        //just for demo, does not make sense
        sc
            .AddSingleton<IComparable>((sp) =>
            {
                //does not matter
                return 1970;
            })
            .AddSingleton<IComparable<Int32>>((sp) =>
            {
                //does not matter
                return 16;
            });
        //this way you can chain the calls , making a fluent interface 
        return sc;


    }
}

```


[Download source](/zipSourceCodes/fluentinterface.zip)



## See Source Code for Microsoft implementation of FluentInterface

    <a href="https://source.dot.net/#Microsoft.Extensions.DependencyInjection.Abstractions/ServiceCollectionServiceExtensions.cs" target="_blank">SourceCode Microsoft.Extensions.DependencyInjection.ServiceCollectionServiceExtensions.AddSingleton</a>
    <br />


## Learn More

    <a href="https://en.wikipedia.org/wiki/Software_design_pattern" target="_blank">Wikipedia</a> <br />


## Homework

Implement a class person that you can see the first name and last name as fluent interface

