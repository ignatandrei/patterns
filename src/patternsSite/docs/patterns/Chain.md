---
id: Chain
title: Chain
tags:
  - Chain
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - Chain
---

# Pattern:  Chain

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Chain

<!-- id : 9 -->
Chain of responsibility pattern allows an object to send a command without knowing what object will receive and handle it.    <br />
Chain the receiving objects and pass the request along the chain until an object handles it.    <br />

## Purpose of .NET implementation

You want to pass the exception to the possible handlers / catch blocks in the all functions in the call stack.    <br />
Exception bubbling in .NET exemplifies the Chain of Responsibility pattern by allowing exceptions to be passed along a chain of potential handlers (catch blocks) until one is found that can handle the exception.    <br />
This can be useful when you want to ensure that exceptions are handled at the appropriate level of abstraction, rather than being caught and handled at a lower level where they may not be fully understood or properly addressed.    <br />
By allowing exceptions to bubble up the call stack, you can ensure that they are handled in a consistent and appropriate manner, regardless of where they occur in the code.    <br />
This mechanism decouples the thrower of the exception from the handlers, providing a flexible and dynamic way of managing errors that occur during runtime.    <br />

## Example in .NET : 


###  Chain
```csharp showLineNumbers title="Chain example for Pattern Chain"
namespace Chain;

public static class ChainDemo
{
    public static int SecondException()
    {
        try
        {
            // Calls 'FirstException' method which is known to throw an exception.
            FirstException();
            return 5;
        }
        catch (Exception ex)
        {
            // Throws a new exception, chaining the caught exception 'ex' as the inner exception.
            // This adds context to the exception, indicating it originated from 'SecondException'.
            throw new Exception($"from {nameof(SecondException)}", ex);
        }
    }
    static int FirstException()
    {

        throw new ArgumentException("argument");
    }
}

```


[Download source](/zipSourceCodes/chain.zip)



## See Source Code for Microsoft implementation of Chain

    <a href="https://source.dot.net/#Microsoft.AspNetCore.Builder/ApplicationBuilderExtensions.cs" target="_blank">SourceCode ApplicationBuilderExtensions.UseMiddleware</a>
    <br />
    <a href="https://source.dot.net/#System.Private.CoreLib/src/System/Object.CoreCLR.cs" target="_blank">SourceCode UseMiddlewareExtensions.UseMiddleware</a>
    <br />


## Learn More

    <a href="https://wiki.c2.com/?ChainOfResponsibilityPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/chain-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-chain" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Implement a middleware in ASP.    <br />
NET Core that intercepts the exception and logs it to the database.    <br />
The middleware should be able to pass the exception to the next middleware in the chain.    <br />


