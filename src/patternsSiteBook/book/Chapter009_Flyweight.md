
# Pattern:  Flyweight

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Flyweight

<!-- id : 16 -->
Flyweight pattern is used to reduce the memory and resource usage for complex models containing a large number of similar objects.
## Purpose of .NET implementation

String is costly as allocation in .NET, so you want to reuse the same string in the memory.    <br />
The string.Intern method is used to retrieve a reference to a string from the intern pool, which is a table of unique strings maintained by .NET.    <br />
If the string you are trying to intern is already in the intern pool, the method returns a reference to the string in the intern pool instead of creating a new string object.    <br />

## Example in .NET : 


###  Flyweight
```csharp showLineNumbers title="Flyweight example for Pattern Flyweight"
using System.Text;

namespace Flyweight;
internal class FlyweightDemo
{
    public static void Demo()
    {
        var str = "Andrei Ignat";
        var str2 = string.Intern(str);
        var str3 = new StringBuilder("Andrei").Append(" Ignat").ToString();
        Console.WriteLine($"str == str2: Value {str==str2} Reference {Object.ReferenceEquals(str,str2)}");
        Console.WriteLine($"str == str3: Value {str==str3} Reference {Object.ReferenceEquals(str,str3)}");

    }
}

```



## See Source Code for Microsoft implementation of Flyweight


[SourceCode String.Intern](https://source.dot.net/#System.Private.CoreLib/src/System/Object.CoreCLR.cs) : https://source.dot.net/#System.Private.CoreLib/src/System/Object.CoreCLR.cs


## Learn More


[Wikipedia](https://en.wikipedia.org/wiki/Flyweight_pattern) : https://en.wikipedia.org/wiki/Flyweight_pattern   


## Homework


Make an exchange rate system.    <br />
The symbol and names of the currency are the same for all the currencies.    <br />
The exchange rate is different for each currency.    <br />
Implement a flyweight that will allow you to create a currency with a symbol and a name and to get the exchange rate for the currency.    <br />



