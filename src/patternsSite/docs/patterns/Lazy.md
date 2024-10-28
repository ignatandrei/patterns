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

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Lazy

<!-- id : 14 -->
Lazy initialization is the tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.    <br />

## Purpose of .NET implementation

You want to access one object that is difficult to create.    <br />
But you do not know when will be created.    <br />
You can use the Lazy pattern to create the object only when it is needed.    <br />
The Lazy of generic T class provides a way to defer the creation of an object until it is actually needed, allowing you to avoid the cost of creating the object until it is actually required.    <br />

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

<!-- delete start -->
[Download source](/zipSourceCodes/lazy.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of Lazy


[SourceCode _defaultLaunchProfile = new Lazy of LaunchProfile ](https://github.com/dotnet/project-system/blob/ebc15f3e0fa644bc96b3a7d19b0595bab9d0ab7d/src/Microsoft.VisualStudio.ProjectSystem.Managed/ProjectSystem/Debug/LaunchSettingsProvider.cs#L39) : https://github.com/dotnet/project-system/blob/ebc15f3e0fa644bc96b3a7d19b0595bab9d0ab7d/src/Microsoft.VisualStudio.ProjectSystem.Managed/ProjectSystem/Debug/LaunchSettingsProvider.cs#L39

[SourceCode Lazy](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Lazy.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Lazy.cs

[SourceCode Lazy of IStreamingFindUsagesPresenter](https://github.com/dotnet/roslyn/blob/d89c824648207390f5be355a782048812ba5f91e/src/VisualStudio/Core/Def/Progression/GraphNavigatorExtension.cs#L27) : https://github.com/dotnet/roslyn/blob/d89c824648207390f5be355a782048812ba5f91e/src/VisualStudio/Core/Def/Progression/GraphNavigatorExtension.cs#L27


## Learn More


[C2Wiki](https://wiki.c2.com/?LazyInstantiationPattern) : https://wiki.c2.com/?LazyInstantiationPattern   

[Wikipedia](https://en.wikipedia.org/wiki/Lazy_initialization) : https://en.wikipedia.org/wiki/Lazy_initialization   


## Homework


Implement a lazy initialization of a logger that logs to a file and to a console.    <br />
The logger should be created only when it is needed.    <br />


