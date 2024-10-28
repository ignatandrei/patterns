
# Pattern:  Builder
<!-- id : 1 -->
The intent of the Builder design pattern is to separate the construction of a complex object from its representation.    <br />

## Purpose of .NET implementation

You want to let the developer construct a SqlConnectionString.    <br />
The SqlConnectionStringBuilder class provides a way to construct connection strings for SQL Server databases.    <br />
Instead of requiring the developer to construct a connection string in one go, potentially leading to mistakes or omissions, SqlConnectionStringBuilder allows for the step-by-step construction of a connection string.    <br />
This can help to ensure that all necessary parameters are included and that the connection string is correctly formatted.    <br />
Once all necessary parameters have been set, the ConnectionString property of the SqlConnectionStringBuilder object can be used to retrieve the constructed connection string.    <br />

## Examples in .NET : 


###  SqlConnectionStringBuilder
```csharp showLineNumbers title="SqlConnectionStringBuilder example for Pattern Builder"
namespace Builder;
internal class ConnectionStringDemo
{
    public static void ConnectionString()
    {
        //start example 2
        SqlConnectionStringBuilder build = new ();
        build.DataSource = ".";
        build.InitialCatalog = "MyDatabase";
        build.ConnectTimeout = 30;
        // Outputs the constructed connection string to the console. This demonstrates the final product of the Builder pattern.
        Console.WriteLine(build.ConnectionString);
        //end example 2
    }
}

```


###  UriBuilder
```csharp showLineNumbers title="UriBuilder example for Pattern Builder"
namespace Builder;
static class UriBuilderDemo
{
    public static void UriMod()
    {
        //start example 1
        var uri = new Uri("https://msprogrammer.serviciipeweb.ro/category/friday-links/");
        var b = new UriBuilder(uri);
        //changing part
        b.Scheme = "http";
        //now we have http://msprogrammer.serviciipeweb.ro/category/friday-links/
        Console.WriteLine(b.Uri);
        //changing part
        b.Path = "2018/03/05/design-patterns-class/";
        //now we have http://msprogrammer.serviciipeweb.ro/2018/03/05/design-patterns-class/
        Console.WriteLine(b.Uri);
        //end example 1
    }
}

```


[Download source](/zipSourceCodes/builder.zip)



## See Source Code for Microsoft implementation of Builder

    <a href="https://referencesource.microsoft.com/#System.Data/fx/src/data/System/Data/SqlClient/SqlConnectionStringBuilder.cs" target="_blank">SourceCode SqlConnectionStringBuilder</a>
    <br />
    <a href="https://source.dot.net/#System.Private.Uri/System/UriBuilder.cs" target="_blank">SourceCode UriBuilder</a>
    <br />


## Learn More

    <a href="http://wiki.c2.com/?BuilderPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/Builder-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Builder" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Builder_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Imagine that you have a logger that logs to a file and to a console.    <br />
Implement a builder that will allow you to create a logger with different configurations.    <br />
For example, you can set the log level, the log format, and the log destination.    <br />


