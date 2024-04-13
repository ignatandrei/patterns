---
id: doc-with-tags
title: Builder
tags:
  - Builder
  - https://github.com/ignatandrei/patterns

  - creational

  - design pattern
---

# Pattern:  Builder

## Description

The intent of the Builder design pattern is to separate the construction of a complex object from its representation

## Examples in .NET : 


###  UriBuilder

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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


###  SqlConnectionStringBuilder

```csharp
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder;
internal class ConnectionStringDemo
{
    public static void ConnectionString()
    {
        //start example 2
        var build = new SqlConnectionStringBuilder();
        build.DataSource = ".";
        build.InitialCatalog = "MyDatabase";
        build.ConnectTimeout = 30;
        //here is the connection string built
        Console.WriteLine(build.ConnectionString);
        //end example 2
    }
}


```


## Learn More

[Wikipedia](https://en.wikipedia.org/wiki/Builder_pattern)

## Homework

Imagine that you have a logger that logs to a file and to a console. Implement a builder that will allow you to create a logger with different configurations. For example, you can set the log level, the log format, and the log destination.


