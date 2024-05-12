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

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.    <br />

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


[Download source](/zipSourceCodes/abstractfactory.zip)



## See Source Code for Microsoft implementation of AbstractFactory

    <a href="https://source.dot.net/#System.Data.Common/System/Data/Common/DbConnection.cs" target="_blank">SourceCode DbConnection</a>
    <br />


## Learn More

    <a href="https://en.wikipedia.org/wiki/Abstract_factory_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Imagine you want to produce loggers.    <br />
You have a logger that logs to a file and a logger that logs to a console and a Nothing Logger - a logger that does nothing.    <br />
Implement an abstract factory that will allow you to create a logger factory that will create a logger that logs to a file or to a console or nothing.    <br />


