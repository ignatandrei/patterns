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
