---
id: Lazy
title: Lazy
tags:
  - Lazy
  - https://github.com/ignatandrei/patterns

  - creational

  - design pattern

  - Lazy
---

# Pattern:  Lazy

Lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.    <br />

## Example in .NET : 


###  Lazy
```csharp showLineNumbers title="Lazy example for Pattern Lazy"
namespace Lazy;
internal class LazyDemo
{
    public DateTime dateTimeConstructClass =DateTime.Now;
    
    public Lazy<DateTime> DateTimeLazy = new(() =>
    {
        Console.WriteLine("Lazy<DateTime> is being initialized ONCE!");
        return DateTime.Now;
    });
}

```


[Download source](/zipSourceCodes/lazy.zip)



## See Source Code for Microsoft implementation of Lazy

    <a href="https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Lazy.cs" target="_blank">SourceCode Lazy</a>
    <br />


## Learn More

    <a href="https://wiki.c2.com/?LazyInstantiationPattern" target="_blank">C2Wiki</a> <br />
    <a href="https://en.wikipedia.org/wiki/Lazy_initialization" target="_blank">Wikipedia</a> <br />


## Homework

Implement a lazy initialization of a logger that logs to a file and to a console. The logger should be created only when it is needed.

