
using Microsoft.Extensions.DependencyInjection;
using System.Data;
using System.Data.Common;

namespace FluentInterface;
internal static class FluentInterfaceDemo
{
    public static ServiceCollection AddServices(this ServiceCollection sc)
    {
        //just for demo, does not make sense
        sc
            .AddSingleton<IComparable>((sp) =>
            {
                //does not matter
                return 1970;
            })
            .AddSingleton<IComparable<Int32>>((sp) =>
            {
                //does not matter
                return 16;
            });
        //this way you can chain the calls , making a fluent interface 
        return sc;


    }
}
