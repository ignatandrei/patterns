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

Strategy pattern allows a client to choose from a family of algorithms at runtime. It is used when the client expects to have multiple algorithms and wants to choose one of them at runtime.

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
        //sort ascending
        al.Sort((x, y) => x.CompareTo(y));

        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }

        Console.WriteLine("---------------");

        //sort descending
        al.Sort((y, x) => x.CompareTo(y));
        for (int i = 0; i < al.Count; i++)
        {
            Console.WriteLine(al[i]);
        }
        Console.WriteLine("---------------");
        //sort custom
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


## Learn More

[Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)

## Homework

Image you want to serialize classes to XML,JSON and CSV . Implement a strategy that will allow you to choose between XML , JSON and CSV serialization at runtime.


