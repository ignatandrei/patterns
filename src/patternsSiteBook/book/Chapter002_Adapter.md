
# Pattern:  Adapter

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Adapter

<!-- id : 4 -->
Adapter design pattern allows the interface of an existing class to be used as another interface.It is often used to make existing classes work with others without modifying their source code.
## Purpose of .NET implementation

You want to  transfer data from a database Command to a DataTable.    <br />
The SQLiteDataAdapter serves as an adapter between the SQLiteCommand object (which represents a SQL command or stored procedure to execute against a SQLite database) and the DataTable object (which represents in-memory data in a tabular format).    <br />

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
        //Target: Creates a DataTable instance to hold the data fetched from the database.
        var dataFormats = new DataTable();
        Console.WriteLine(dataFormats.Rows.Count);
        Console.WriteLine(dataFormats.Columns.Count);
        using (var con = new SQLiteConnection())
        {
            con.ConnectionString = "Data Source=CatalogRo.sqlite3";
            await con.OpenAsync();

            using (var cmd = new SQLiteCommand())
            {
                // Adaptee: Sets the SQL command text to fetch all records from the 'Format' table.
                cmd.CommandText = "select * from Format";
                cmd.Connection = con;
                using (var adapt = new SQLiteDataAdapter(cmd))
                {
                    // Adapter: Fills the DataTable (Target) with data fetched using the SQLiteCommand (Adaptee).
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



## See Source Code for Microsoft implementation of Adapter


[SourceCode AsciiEncoding](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Text/ASCIIEncoding.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Text/ASCIIEncoding.cs

[SourceCode SqliteDataAdapter](https://github.com/mono/mono/blob/9bb01f57a126dab35f070ce238457931e9814c33/mcs/class/Mono.Data.Sqlite/Mono.Data.Sqlite_2.0/SQLiteDataAdapter.cs#L20) : https://github.com/mono/mono/blob/9bb01f57a126dab35f070ce238457931e9814c33/mcs/class/Mono.Data.Sqlite/Mono.Data.Sqlite_2.0/SQLiteDataAdapter.cs#L20

[SourceCode UTF32Encoding](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Text/UTF32Encoding.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Text/UTF32Encoding.cs


## Learn More


[C2Wiki](http://wiki.c2.com/?AdapterPattern) : http://wiki.c2.com/?AdapterPattern   

[dofactory](http://www.dofactory.com/net/Adapter-design-pattern) : http://www.dofactory.com/net/Adapter-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Adapter) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Adapter   

[Wikipedia](https://en.wikipedia.org/wiki/Adapter_pattern) : https://en.wikipedia.org/wiki/Adapter_pattern   


## Homework


iPhone 7 does not have a headphone jack.    <br />
Implement an adapter that will allow you to use your old headphones , that have jack, with the iPhone 7.    <br />



