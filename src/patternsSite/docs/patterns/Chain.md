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

Chain of responsibility pattern allows an object to send a command without knowing what object will receive and handle it. Chain the receiving objects and pass the request along the chain until an object handles it

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
            FirstException();
            return 5;
        }
        catch (Exception ex)
        {
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



## Learn More

    <a href="https://wiki.c2.com/?ChainOfResponsibilityPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/chain-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-chain" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern" target="_blank">Wikipedia</a> <br />


## Homework

Implement a middleware in ASP.NET Core that intercepts the exception and logs it to the database. The middleware should be able to pass the exception to the next middleware in the chain.

