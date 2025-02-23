using Microsoft.EntityFrameworkCore;
var rootFolderFromGit = @"D:\gth\patterns";
DbPatternContext cnt = new(Path.Combine(rootFolderFromGit,@"src","data"));
var all =await cnt.PatternData.ToArrayAsync();
var descAll = await cnt.Description.ToArrayAsync();
var homeworkAll = await cnt.Homework.ToArrayAsync();
var explanations = await cnt.Explanation.ToArrayAsync();
foreach (var a in all)
{
    a.Description = descAll.First(d => d.Id == a.Id).Lines();
    a.Homework = homeworkAll.First(d => d.Id == a.Id).Lines();
    a.Explanation = explanations
        .Where(e => e.Id == a.Id)
        .SelectMany(e => e.Lines())
        .ToArray();
}
var noEx= all.Where(a => a.Explanation.Length == 0).ToArray();
if (noEx.Length > 0)
{
    Console.WriteLine("No explanation for patterns :");
    foreach (var a in noEx)
    {
        Console.WriteLine(a.Id + " " + a.Title);
    }
}
//foreach (var a in all)
//{
//    HomeworkDataLines dl = new();
//    var desc = a.Homework.Split(".").ToArray();
//    for (int i = 0; i < desc.Length; i++)
//    {
//        if (desc[i] == null) continue;
//        var prop = typeof(DataLines).GetProperty("Line" + (i + 1));
//        ArgumentNullException.ThrowIfNull(prop, "Property not found for " + i);
//        prop.SetValue(dl, desc[i]);
//    }
//    cnt.Homework.Add(dl);
//}
//await cnt.SaveChangesAsync();
//return;
//foreach (var a in all)
//{
//    DataLines dl = new();
//    var desc=a.Description.Split(".").ToArray();
//    for (int i = 0; i < desc.Length; i++)
//    {
//        if (desc[i] == null) continue;
//        var prop = typeof(DataLines).GetProperty("Line" + (i + 1));
//        ArgumentNullException.ThrowIfNull(prop, "Property not found for "+i);
//        prop.SetValue(dl, desc[i]);
//    }
//    cnt.Description.Add(dl);
//}
//await cnt.SaveChangesAsync();
//return;
var links = await cnt.Links.ToArrayAsync();
all.ToList().ForEach(a => a.Links = links.Where(l => l.IDPatternData == a.Id).ToArray());

GeneratorFiles generator=new(all);
await generator.Initialize(Path.Combine(rootFolderFromGit,"src","examples"));
await generator.WriteDocusaurus(Path.Combine(rootFolderFromGit, "src","patternsSite","docs"));
await generator.WriteBook(Path.Combine(rootFolderFromGit, "src", "patternsSiteBook"));
await generator.WriteBlog(19);
await generator.WriteReadme(Path.Combine(rootFolderFromGit,"README.md"));
await generator.CreateZip(
    Path.Combine(rootFolderFromGit, "src", "examples"),
    Path.Combine(rootFolderFromGit, "src", "patternsSite","static","zipSourceCodes")
);

foreach (var link in generator.NoSourceCode())
{
    Console.WriteLine($"No source code for {link.Id} {link.Title}");
}
Console.WriteLine("done at " + DateTime.Now.ToString("HH:mm"));