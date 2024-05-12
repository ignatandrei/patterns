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
