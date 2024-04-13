using System;
using System.Data.SqlClient;

namespace Builder
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            ConnectionString();
            UriMod();
        }

        private static void UriMod()
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

        static void ConnectionString()
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
}
