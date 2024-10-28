
# Pattern:  Singleton
<!-- id : 10 -->
Singleton pattern restricts the instantiation of a class to one object.    <br />
It is used when you want to have one instance of a class that is shared across the application.    <br />

## Purpose of .NET implementation

You have a factory to create objects.    <br />
You want to have a single point of creation for all the objects.    <br />
You can use the Singleton pattern to ensure that only one instance of the factory is created and that all requests for object creation are handled by that single instance.    <br />

## Example in .NET : 


###  Singleton
```csharp showLineNumbers title="Singleton example for Pattern Singleton"
using System.Data.OleDb;

namespace Singleton;
/// <summary>
/// 
///sealed class Singleton
///{
///    private Singleton() { }
///    public static readonly Singleton Instance = new Singleton();
///}
///
/// </summary>
internal class SingletonDemo
{
    public static void GetFactory()
    {
        //cannot do new
        //OleDbFactory factory=new OleDbFactory();
        //get singleton instance
        OleDbFactory factory = OleDbFactory.Instance;
    }
}

```


[Download source](/zipSourceCodes/singleton.zip)



## See Source Code for Microsoft implementation of Singleton

    <a href="https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/OleDb/OleDbFactory.cs" target="_blank">SourceCode OleDbFactory.Instance</a>
    <br />


## Learn More

    <a href="https://wiki.c2.com/?SingletonPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/singleton-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-singleton" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Singleton_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Implement a singleton that will allow you to create a single instance of a logger that logs to a file and to a console.    <br />


