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
<!-- id : 14 -->
Lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.    <br />

## Purpose of .NET implementation


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

    <a href="https://github.com/dotnet/project-system/blob/ebc15f3e0fa644bc96b3a7d19b0595bab9d0ab7d/src/Microsoft.VisualStudio.ProjectSystem.Managed/ProjectSystem/Debug/LaunchSettingsProvider.cs#L39" target="_blank">SourceCode _defaultLaunchProfile = new Lazy of LaunchProfile </a>
    <br />
    <a href="https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Lazy.cs" target="_blank">SourceCode Lazy</a>
    <br />
    <a href="https://github.com/dotnet/roslyn/blob/d89c824648207390f5be355a782048812ba5f91e/src/VisualStudio/Core/Def/Progression/GraphNavigatorExtension.cs#L27" target="_blank">SourceCode Lazy of IStreamingFindUsagesPresenter</a>
    <br />


## Learn More

    <a href="https://wiki.c2.com/?LazyInstantiationPattern" target="_blank">C2Wiki</a> <br />
    <a href="https://en.wikipedia.org/wiki/Lazy_initialization" target="_blank">Wikipedia</a> <br />


## Homework


Implement a lazy initialization of a logger that logs to a file and to a console.    <br />
The logger should be created only when it is needed.    <br />


