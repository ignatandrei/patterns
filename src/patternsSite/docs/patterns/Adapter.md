---
id: Adapter
title: Adapter
tags:
  - Adapter
  - https://github.com/ignatandrei/patterns

  - structural

  - design pattern

  - SQLiteDataAdapter

  - EncodingAdapter
---

# Pattern:  Adapter

Adapter design pattern allows the interface of an existing class to be used as another interface.It is often used to make existing classes work with others without modifying their source code.

## Examples in .NET : 


###  SQLiteDataAdapter
```csharp showLineNumbers title="SQLiteDataAdapter example for Pattern Adapter"
namespace Adaptor;
internal class SQLiteDataAdapterDemo
{
    /// <summary>
    ///Adaptee  - Command 
    ///Target  - DataTable
    ///Adapter  - SqlDataAdapter
    ///Target Method - Fill(Dataset instance)
    /// </summary>
    /// <returns></returns>
    public static async Task MainSqliteAdapterAsync()
    {
        var dataFormats = new DataTable();
        Console.WriteLine(dataFormats.Rows.Count);
        Console.WriteLine(dataFormats.Columns.Count);
        using (var con = new SQLiteConnection())
        {
            con.ConnectionString = "Data Source=CatalogRo.sqlite3";
            await con.OpenAsync();
            using (var cmd = new SQLiteCommand())
            {
                cmd.CommandText = "select * from Format";
                cmd.Connection = con;
                using (var adapt = new SQLiteDataAdapter(cmd))
                {
                    adapt.Fill(dataFormats);
                }
            }

        }
        Console.WriteLine(dataFormats.Rows.Count);
        Console.WriteLine(dataFormats.Columns.Count);
    }
}

```


###  EncodingAdapter
```csharp showLineNumbers title="EncodingAdapter example for Pattern Adapter"
namespace Adaptor;
internal class EncodingAdapterDemo
{
    /// <summary>
    ///Adaptee  - string 
    ///Target  - bytes
    ///Adapter  - encoding
    ///Target Method - GetBytes
    /// </summary>
    public static void AdapterStringByte()
    {
        var url = "http://msprogrammer.serviciipeweb.ro";
        Encoding e = new ASCIIEncoding();
        var b = e.GetBytes(url);

        Console.WriteLine($"from {e.EncodingName} number bytes {b.Length}");

        e = new UTF32Encoding();
        b = e.GetBytes(url);
        Console.WriteLine($"from {e.EncodingName} number bytes {b.Length}");

    }


}

```


## Learn More

        <a href="http://wiki.c2.com/?AdapterPattern" target="_blank">C2Wiki</a> <br />
        <a href="http://www.dofactory.com/net/Adapter-design-pattern" target="_blank">dofactory</a> <br />
        <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Adapter" target="_blank">DPH</a> <br />
        <a href="https://en.wikipedia.org/wiki/Adapter_pattern" target="_blank">Wikipedia</a> <br />

## Homework

iPhone 7 does not have a headphone jack. Implement an adapter that will allow you to use your old headphones , that have jack, with the iPhone 7.

