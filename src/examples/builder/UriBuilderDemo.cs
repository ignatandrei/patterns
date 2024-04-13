using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Builder;
static class UriBuilderDemo
{
    public static void UriMod()
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
}
