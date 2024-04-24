using Lazy;

LazyDemo lazyDemo = new();
await Task.Delay(3000);
Console.WriteLine(lazyDemo.dateTimeConstructClass.ToString("mmss"));

Console.WriteLine(lazyDemo.DateTimeLazy.Value.ToString("mmss"));
await Task.Delay(3000);

Console.WriteLine(lazyDemo.DateTimeLazy.Value.ToString("mmss"));
