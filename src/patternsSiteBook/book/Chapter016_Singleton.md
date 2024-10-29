
# Pattern:  Singleton

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Singleton

<!-- id : 10 -->
Singleton pattern restricts the instantiation of a class to one object.It is used when you want to have one instance of a class that is shared across the application.
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



## See Source Code for Microsoft implementation of Singleton


[SourceCode OleDbFactory.Instance](https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/OleDb/OleDbFactory.cs) : https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/OleDb/OleDbFactory.cs


## Learn More


[C2Wiki](https://wiki.c2.com/?SingletonPattern) : https://wiki.c2.com/?SingletonPattern   

[dofactory](http://www.dofactory.com/net/singleton-design-pattern) : http://www.dofactory.com/net/singleton-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-singleton) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-singleton   

[Wikipedia](https://en.wikipedia.org/wiki/Singleton_pattern) : https://en.wikipedia.org/wiki/Singleton_pattern   


## Homework


Implement a singleton that will allow you to create a single instance of a logger that logs to a file and to a console.    <br />



