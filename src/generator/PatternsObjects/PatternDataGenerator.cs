﻿namespace PatternsObjects;
public class PatternDataGenerator
{

    public int Id { get; set; }
    public bool CanWrite()
    {
        return Stage?.ToLower() == "done";
    }
    public string Title { get; set; } = string.Empty;
    public string[] Description { get; set; } = Array.Empty<string>()   ;
    public string Stage { get; set; } = string.Empty;
    public Links[] Links { get; set; } = Array.Empty<Links>();

    public Links[] SourceCodeLinks() => Links.Where(l => l.Name.StartsWith("SourceCode")).ToArray();

    public Links[] ExternalLinks() => Links.Except(SourceCodeLinks()).ToArray();

    public string DemoFileCsproj { get; set; } = string.Empty;
    public string Tags { get; set; } = string.Empty;
    public string ClassNames { get; set; } = string.Empty;
    public string[] Homework { get; set; } = Array.Empty<string>();
    public string[] Explanation { get; set; } = Array.Empty<string>();

    public string[] ClassNamesArray()
    {
        return (ClassNames??string.Empty).Split(",");
    }
    public string[] TagsArray()
    {

        return Tags.Split(",");
    }
    public ClassWithExample[] ClassWithExamples=Array.Empty<ClassWithExample>();
    public async Task<bool> Initialize(string rootFolderCode)
    {
        if(!CanWrite()) return false;

        List<ClassWithExample> classes = new();
        foreach (var item in ClassNamesArray())
        {
            var folder = Path.Combine(rootFolderCode, Title);
            var files = Directory.GetFiles(folder, item + "Demo.cs", SearchOption.AllDirectories);
            switch (files.Length)
            {
                case 0:
                    Console.WriteLine($"no file {item}Demo.cs in {folder}");
                    throw new FileNotFoundException($"no file {item}Demo.cs in {folder}");
                case 1:
                    break; 
                default:
                    Console.WriteLine($"multiple {item}Demo in {folder}");
                    throw new FileNotFoundException($"multiple {item}Demo.cs in {folder}");
            }
            var code = await File.ReadAllTextAsync(files[0]);
            classes.Add(new(item, code));

        }
        this.ClassWithExamples= classes.ToArray();
        return true;
    }
    public async Task<string> DataDocusaurus()
    {
        if(!CanWrite())
            return string.Empty;
        var template = new Pattern(this);
        var data = await template.RenderAsync();
        return await Task.FromResult(data);
    }
}
