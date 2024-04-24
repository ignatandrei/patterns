namespace Lazy;
internal class LazyDemo
{
    public DateTime dateTimeConstructClass =DateTime.Now;
    
    public Lazy<DateTime> DateTimeLazy = new(() =>
    {
        Console.WriteLine("Lazy<DateTime> is being initialized ONCE!");
        return DateTime.Now;
    });
}
