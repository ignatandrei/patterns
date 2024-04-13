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
