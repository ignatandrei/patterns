﻿namespace Builder;
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