---
id: Strategy
title: Strategy
tags:
  - Strategy
  - https://github.com/ignatandrei/patterns

  - behavioral

  -  design pattern

  - Strategy
---

# Pattern:  Strategy
<!-- id : 11 -->
Strategy pattern allows a client to choose from a family of algorithms at runtime.    <br />
It is used when the client expects to have multiple algorithms and wants to choose one of them at runtime.    <br />

## Purpose of .NET implementation

You want to have a function that sort objects based on a specific criteria.    <br />
You want to let the developer to provide the sort criteria.    <br />
You want also  allow the sorting behavior (the strategy) to be selected at runtime.    <br />
You can use the Strategy pattern to let developer define the sorting criteria and the strategy to be used at runtime.    <br />

## Example in .NET : 


###  Strategy
```csharp showLineNumbers title="Strategy example for Pattern Strategy"
using System;
using System.Collections.Generic;

namespace Strategy;
internal class StrategyDemo
{
    public static void SortWithDifferentStrategies()
    {
        List<int> al = new ();
        al.Add(102);
        al.Add(201);
        // Strategy 1: Sorts the list in ascending order.
        al.Sort((x, y) => x.CompareTo(y));

        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }

        Console.WriteLine("---------------");

        // Strategy 2: Sorts the list in descending order.
        al.Sort((y, x) => x.CompareTo(y));
        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }
        Console.WriteLine("---------------");
        // Strategy 3: Sorts the list based on the last digit of each number.
        al.Sort((x, y) => LastDigit(x).CompareTo(LastDigit(y)));
        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }

        var array = al.FindAll(it => it > 10);


    }

    static int LastDigit(int x)
    {
        return x % 10;
    }

}


```


[Download source](/zipSourceCodes/strategy.zip)



## See Source Code for Microsoft implementation of Strategy

    <a href="https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Array.cs" target="_blank">SourceCode Array.Sort</a>
    <br />


## Learn More

    <a href="https://wiki.c2.com/?StrategyPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/strategy-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-strategy" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Strategy_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Image you want to serialize classes to XML,JSON and CSV.    <br />
Implement a strategy that will allow you to choose between XML , JSON and CSV serialization at runtime.    <br />


