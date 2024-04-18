using System.Data.OleDb;

namespace Singleton;
/// <summary>
/// 
///sealed class Singleton
///{
///    private Singleton() { }
///    public static readonly Singleton Instance = new Singleton();
///}
///
/// </summary>
internal class SingletonDemo
{
    public static void GetFactory()
    {
        //cannot do new
        //OleDbFactory factory=new OleDbFactory();
        //get singleton instance
        OleDbFactory factory = OleDbFactory.Instance;
    }
}
