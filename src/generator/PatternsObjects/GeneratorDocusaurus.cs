namespace PatternsObjects;

public class GeneratorDocusaurus
{
    public readonly PatternDataGenerator[] patterns;

    public GeneratorDocusaurus(PatternData[] patterns)
    {
        this.patterns = patterns.Select(it=> Mapper.MapPDToPDG(it)).ToArray();
    }
    public PatternDataGenerator[] Done()
    {
        return patterns.Where(it=>it.CanWrite()).ToArray();
    }
    public PatternDataGenerator[] NotDone()
    {
        return patterns.Except(Done()).ToArray();
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
        var intro= new Intro(this);
        var textIntro= await intro.RenderAsync();
        await File.WriteAllTextAsync(Path.Combine(folder,"intro.md"),textIntro);
        var data=this.patterns.Select(it=>it
        .DataDocusaurus()
        .AddData(it))
            .ToArray();
        var str= await Task.WhenAll(data);
        var fldPatterns= Path.Combine(folder,"patterns");
        foreach (var it in str)
        {
            if (string.IsNullOrWhiteSpace(it.res))
                continue;
            var file = Path.Combine(fldPatterns, it.data.Title+".md");
            await File.WriteAllTextAsync(file, it.res);
        }
        return true;
    }
}
