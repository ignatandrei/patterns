using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Facade;
internal class FacadeDemo
{
    public static void ExecuteSql()
    {
        MyDbContext cnt = new();
        //calling the facade
        DatabaseFacade dbFacade = cnt.Database;
        dbFacade.EnsureCreated(); 
    }
}

public class MyDbContext:DbContext
{
    
}

