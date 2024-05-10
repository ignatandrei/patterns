using System.Text;

namespace Flyweight;
internal class FlyweightDemo
{
    public static void Demo()
    {
        var str = "Andrei Ignat";
        var str2 = string.Intern(str);
        var str3 = new StringBuilder("Andrei").Append(" Ignat").ToString();
        Console.WriteLine($"str == str2: Value {str==str2} Reference {Object.ReferenceEquals(str,str2)}");
        Console.WriteLine($"str == str3: Value {str==str3} Reference {Object.ReferenceEquals(str,str3)}");

    }
}
