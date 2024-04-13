using System.Diagnostics;

namespace PatternsObjects;

public class GeneratorFiles
{
    public readonly PatternDataGenerator[] patterns;

    public GeneratorFiles(PatternData[] patterns)
    {
        this.patterns = patterns.Select(it => Mapper.MapPDToPDG(it)).ToArray();
    }
    public PatternDataGenerator[] Done()
    {
        return patterns.Where(it => it.CanWrite())
            .OrderBy(it => it.Title)
            .ToArray();
    }
    public PatternDataGenerator[] NotDone()
    {
        return patterns.Except(Done()).OrderBy(it => it.Title).ToArray();
    }
    public async Task<bool> Initialize(string folderCode)
    {
        foreach (var item in this.patterns)
        {
            await item.Initialize(folderCode);
        }
        return true;
    }
    public async Task<bool> WriteDocusaurus(string folder)
    {
        var intro = new Intro(this);
        var textIntro = await intro.RenderAsync();
        await File.WriteAllTextAsync(Path.Combine(folder, "intro.md"), textIntro);
        var data = this.patterns.Select(it => it
        .DataDocusaurus()
        .AddData(it))
            .ToArray();
        var str = await Task.WhenAll(data);
        var fldPatterns = Path.Combine(folder, "patterns");
        foreach (var it in str)
        {
            if (string.IsNullOrWhiteSpace(it.res))
                continue;
            var file = Path.Combine(fldPatterns, it.data.Title + ".md");
            await File.WriteAllTextAsync(file, it.res);
        }
        return true;
    }
    public async Task<bool> WriteBlog(int nr)
    {
        var d=Done();
        foreach (var item in d)
        {
            if (item.Id <= nr) continue;
            var blog = new Blog(item);
            var file= Path.GetTempFileName();
            await File.WriteAllTextAsync(file, await blog.RenderAsync());
            Process.Start("notepad.exe", file);

        }
        return true;
    }
}