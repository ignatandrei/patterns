
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
