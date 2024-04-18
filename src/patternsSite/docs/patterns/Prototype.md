---
id: Prototype
title: Prototype
tags:
  - Prototype
  - https://github.com/ignatandrei/patterns

  - creational

  - design pattern

  - ICloneable
---

# Pattern:  Prototype

It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects

## Example in .NET : 


###  ICloneable
```csharp showLineNumbers title="ICloneable example for Pattern Prototype"
using System;

namespace Prototype;
class Parent : ICloneable
{
    public int Age { get; set; }
    public Child MyChild { get; set; }

    public object Clone()
    {
        //TODO: serialize + unserialize 
        //with System.Text.Json.JsonSerializer

        var p = ShallowClone();
        //TODO: clone the child 
        var c = new Child();
        c.Age = this.MyChild.Age;

        p.MyChild = c;
        return p;
    }

    public Parent ShallowClone()
    {
        return this.MemberwiseClone() as Parent;
    }
}


```


## Learn More

[Wikipedia](https://en.wikipedia.org/wiki/Prototype_pattern)

## Homework

Imagine that you have a cow farm and you want to create a new cow. Implement a prototype that will allow you to clone a cow. The cow should have a name and a weight

