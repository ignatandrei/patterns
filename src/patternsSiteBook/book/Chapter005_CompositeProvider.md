
# Pattern:  CompositeProvider

Read online at https://ignatandrei.github.io/patterns/docs/patterns/CompositeProvider

<!-- id : 19 -->
Composite Provider pattern is a structural design pattern that lets you compose objects into tree structures to represent part-whole hierarchies.Composite lets clients treat individual objects and compositions of objects uniformly.
## Purpose of .NET implementation

You want to switch between different implementations of an interface at runtime.    <br />
You can use the Composite Provider pattern to provide a single interface that can be implemented by multiple classes, allowing you to switch between different implementations at runtime.    <br />

## Example in .NET : 


###  CompositeProvider
```csharp showLineNumbers title="CompositeProvider example for Pattern CompositeProvider"

using Microsoft.Extensions.FileProviders;

namespace CompositeProvider;
public class CompositeProviderDemo
{
    private readonly IFileProvider _fileProvider;
    public CompositeProviderDemo(string folder)
    {
        var fileOnHDDProvider = new PhysicalFileProvider(folder);
        var manifestEmbeddedProvider =
    new ManifestEmbeddedFileProvider(this.GetType().Assembly);
        _fileProvider = new CompositeFileProvider(fileOnHDDProvider,manifestEmbeddedProvider);

    }
    public string[] GetFiles()
    {
        List<string> ret = [];
        var files = _fileProvider.GetDirectoryContents(string.Empty);
        var contents = _fileProvider.GetDirectoryContents(string.Empty);
        foreach (var fileInfo in contents)
        {
            ret.Add(fileInfo.Name);
        }
        return ret.ToArray();
    }
    public string GetContentFile(string name)
    {
        var fileInfo = _fileProvider.GetFileInfo(name);
        if (fileInfo.Exists)
        {
            using var stream = fileInfo.CreateReadStream();
            using var reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }
        return string.Empty;
    }

}

```



## See Source Code for Microsoft implementation of CompositeProvider


[SourceCode Composite Provider](https://github.com/dotnet/runtime/blob/2a51ee3fd10c2a5af5d44e710ef804813f73bf75/src/libraries/Microsoft.Extensions.FileProviders.Composite/src/CompositeFileProvider.cs#L15) : https://github.com/dotnet/runtime/blob/2a51ee3fd10c2a5af5d44e710ef804813f73bf75/src/libraries/Microsoft.Extensions.FileProviders.Composite/src/CompositeFileProvider.cs#L15


## Learn More


[File Providers in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/file-providers?view=aspnetcore-8.0) : https://learn.microsoft.com/en-us/aspnet/core/fundamentals/file-providers?view=aspnetcore-8.0   

[Wikipedia](https://en.wikipedia.org/wiki/Composite_pattern) : https://en.wikipedia.org/wiki/Composite_pattern   


## Homework


Imagine that you have 2 loggers , for a file and a console.    <br />
Implement a composite provider that allows you to log to multiple destinations at the same time.    <br />



