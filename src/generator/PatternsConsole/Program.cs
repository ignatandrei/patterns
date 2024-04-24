using Microsoft.EntityFrameworkCore;
var rootFolderFromGit = @"D:\gth\patterns";
DbPatternContext cnt = new(Path.Combine(rootFolderFromGit,@"src","data"));
var all =await cnt.PatternData.ToArrayAsync();
//foreach (var a in all)
//{
//    var l=new Links();
//    l.IDPatternData=a.Id;
//    l.Link = $"http://www.dofactory.com/net/{a.Title}-design-pattern";
//    l.Name = "dofactory";
//    cnt.Links.Add(l);
//}
//await cnt.SaveChangesAsync();

var links = await cnt.Links.ToArrayAsync();
all.ToList().ForEach(a => a.Links = links.Where(l => l.IDPatternData == a.Id).ToArray());

GeneratorFiles generator=new(all);
await generator.Initialize(Path.Combine(rootFolderFromGit,"src","examples"));
await generator.WriteDocusaurus(Path.Combine(rootFolderFromGit, "src","patternsSite","docs"));
await generator.WriteBlog(12);
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

