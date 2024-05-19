using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Facade;
internal class FacadeDemo
{
    public static void ExecuteSql()
    {
        MyDbContext cnt = new();

        DatabaseFacade dbFacade = cnt.Database;
        //calling the facade for create the database
        dbFacade.EnsureCreated(); 
        //calling the facade for begin a transaction
        dbFacade.BeginTransaction();
    }
}

public class MyDbContext:DbContext
{
    
}

