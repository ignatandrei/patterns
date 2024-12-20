---
id: AbstractFactory
title: AbstractFactory
tags:
  - AbstractFactory
  - https://github.com/ignatandrei/patterns

  - creational

  - design pattern

  - AbstractFactory
---

# Pattern:  AbstractFactory

Read online at https://ignatandrei.github.io/patterns/docs/patterns/AbstractFactory

<!-- id : 17 -->
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
## Purpose of .NET implementation

You want to create commands for any specific database type in order to obtain data from a database.    <br />
This means you can switch between different databases (e.g., SQL Server, MySQL, PostgreSQL) without changing the core logic of your application.    <br />
The factory will provide the appropriate concrete implementation of the DBConnection for the database in use..    <br />
By using an Abstract Factory, your application can remain agnostic of the specific type of database it is interacting with.    <br />

## Example in .NET : 


###  AbstractFactory
```csharp showLineNumbers title="AbstractFactory example for Pattern AbstractFactory"

using Microsoft.Data.SqlClient;
using System.Data.Common;

namespace AbstractFactory;
internal class AbstractFactoryDemo
{
    public static void Demo()
    {
        //create DbConnection factory by using the instance of SqlConnection
        DbConnection connection = new SqlConnection();
        //create DbCommand instance by using the instance of SqlConnection
        DbCommand command = connection.CreateCommand();
        //really, the DBCommand is a SqlCommand
        SqlCommand? sqlCommand = command as SqlCommand;
        //check if the DbCommand is a SqlCommand
        Console.WriteLine($"DbCommand is SqlCommand: {sqlCommand != null}");
    }
}

```

<!-- delete start -->
[Download source](/zipSourceCodes/abstractfactory.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of AbstractFactory


[SourceCode DbConnection](https://source.dot.net/#System.Data.Common/System/Data/Common/DbConnection.cs) : https://source.dot.net/#System.Data.Common/System/Data/Common/DbConnection.cs


## Learn More


[Wikipedia](https://en.wikipedia.org/wiki/Abstract_factory_pattern) : https://en.wikipedia.org/wiki/Abstract_factory_pattern   


## Homework


Imagine you want to produce loggers.    <br />
You have a logger that logs to a file and a logger that logs to a console and a Nothing Logger - a logger that does nothing.    <br />
Implement an abstract factory that will allow you to create a logger factory that will create a logger that logs to a file or to a console or nothing.    <br />


