
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
