using System.Diagnostics;
using System.IO.Compression;

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
    private async Task<bool> WriteIntro(string folder)
    {
        var intro = new Intro(this);
        var textIntro = await intro.RenderAsync();
        await File.WriteAllTextAsync(Path.Combine(folder, "intro.md"), textIntro);
        return true;
    }
    private async Task<bool> WritePatterns(string folder, bool AsChapter)
    {
        var data = this.patterns.Select(it => it
.DataDocusaurus()
.AddData(it))
    .ToArray();
        var str = await Task.WhenAll(data);
        int nr = 0;
        foreach (var it in str)
        {
            if (string.IsNullOrWhiteSpace(it.res))
                continue;
            string chapter = AsChapter ? "Chapter"+(++nr).ToString("00#")+"_":"";
            var file = Path.Combine(folder, chapter+ it.data.Title + ".md");
            var content = it.res;
            if(AsChapter)
            {
                var first = content.IndexOf("#");
                content = content.Substring(first-1);
            }
            await File.WriteAllTextAsync(file, content);
        }
        return true;
    }
    public async Task<bool> WriteDocusaurus(string folder)
    {
        await WriteIntro(folder);
        //var intro = new Intro(this);
        //var textIntro = await intro.RenderAsync();
        //await File.WriteAllTextAsync(Path.Combine(folder, "intro.md"), textIntro);

        var fldPatterns = Path.Combine(folder, "patterns");
        //var data = this.patterns.Select(it => it
        //.DataDocusaurus()
        //.AddData(it))
        //    .ToArray();
        //var str = await Task.WhenAll(data);
        //foreach (var it in str)
        //{
        //    if (string.IsNullOrWhiteSpace(it.res))
        //        continue;
        //    var file = Path.Combine(fldPatterns, it.data.Title + ".md");
        //    await File.WriteAllTextAsync(file, it.res);
        //}
        await WritePatterns(fldPatterns,false);
        return true;
    }
    public async Task<bool> WriteReadme(string file)
    {
        var intro = new Readme(this);
        var textIntro = await intro.RenderAsync();
        textIntro = textIntro.Replace("/docs/", "https://ignatandrei.github.io/patterns/docs/");
        await File.WriteAllTextAsync(file, textIntro);
        return true;
    }
    public PatternDataGenerator[] NoSourceCode()
    {
        return this.patterns.Where(it=>!it.SourceCodeLinks().Any()).ToArray();
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

    public async Task CreateZip(string source, string destination)
    {
        var folder =Directory.GetDirectories(source);
        foreach (var item in folder)
        {
            var zip = Path.Combine(destination, Path.GetFileName(item).ToLowerInvariant() + ".zip");
            if (zip.EndsWith(".vs.zip"))//no need for this
                continue;

            if (File.Exists(zip))
            {
                //File.Delete(zip);
                continue;
            }
            ZipFile.CreateFromDirectory(item, zip);
        }
    }

    public async Task<bool> WriteBook(string folder)
    {
        string fld=  Path.Combine(folder, "book");
        await WritePatterns(fld,true);
        return true;
    }
}