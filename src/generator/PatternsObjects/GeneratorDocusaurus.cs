namespace PatternsObjects;

public class GeneratorDocusaurus
{
    private readonly PatternDataGenerator[] patterns;

    public GeneratorDocusaurus(PatternData[] patterns)
    {
        this.patterns = patterns.Select(it=> Mapper.MapPDToPDG(it)).ToArray();
    }
    public async Task<bool> Initialize(string folderCode)
    {
        foreach (var item in this.patterns)
        {
            await item.Initialize(folderCode);
        }
        return true;
    }
    public async Task<bool> Write(string folder)
    {
        var data=this.patterns.Select(it=>it
        .DataDocusaurus()
        .AddData(it))
            .ToArray();
        var str= await Task.WhenAll(data);
        foreach (var it in str)
        {
            var file = Path.Combine(folder, it.data.Title+".md");
            await File.WriteAllTextAsync(file, it.res);
        }
        return true;
    }
}
