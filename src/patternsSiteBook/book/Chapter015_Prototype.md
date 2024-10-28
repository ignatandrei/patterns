
# Pattern:  Prototype

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Prototype

<!-- id : 5 -->
It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.    <br />

## Purpose of .NET implementation

If you want to clone an object ( that has members and methods ), the easy way is to copy the members into a new instance.    <br />
But if you have a complex object, you may want to use the Prototype pattern.    <br />
You then provide MemberwiseClone is a shallow copy for the members of an object.    <br />
However, the Prototype pattern is not used very often in .NET, because the ICloneable interface is not very useful.    <br />

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



## See Source Code for Microsoft implementation of Prototype


[SourceCode Object.MemberwiseClone](https://source.dot.net/#System.Private.CoreLib/src/System/Object.CoreCLR.cs) : https://source.dot.net/#System.Private.CoreLib/src/System/Object.CoreCLR.cs


## Learn More


[C2Wiki](https://wiki.c2.com/?PrototypePattern) : https://wiki.c2.com/?PrototypePattern   

[dofactory](http://www.dofactory.com/net/Prototype-design-pattern) : http://www.dofactory.com/net/Prototype-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Prototype) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Prototype   

[Wikipedia](https://en.wikipedia.org/wiki/Prototype_pattern) : https://en.wikipedia.org/wiki/Prototype_pattern   


## Homework


Imagine that you have a cow farm and you want to create a new cow.    <br />
Implement a prototype that will allow you to clone a cow.    <br />
The cow should have a name and a weight.    <br />



