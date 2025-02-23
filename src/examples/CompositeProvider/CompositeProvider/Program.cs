// See https://aka.ms/new-console-template for more information
using CompositeProvider;

Console.WriteLine("Hello, World!");
var path = Directory.GetParent(Environment.CurrentDirectory);
ArgumentNullException.ThrowIfNull(path);
CompositeProviderDemo compositeProvider = new(path.FullName) ;
Console.WriteLine("Files in the current directory:");
foreach (var file in compositeProvider.GetFiles())
{
    Console.WriteLine(file);
}
Console.WriteLine("obtain MyResource.txt even if does not exists on folder");
Console.WriteLine(compositeProvider.GetContentFile("MyResource.txt"));