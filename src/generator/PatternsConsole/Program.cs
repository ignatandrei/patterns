using Microsoft.EntityFrameworkCore;
var rootFolderFromGit = @"D:\gth\patterns";
DbPatternContext cnt = new(Path.Combine(rootFolderFromGit,@"src","data"));
var all =await cnt.PatternData.ToArrayAsync();
GeneratorFiles generator=new(all);
await generator.Initialize(Path.Combine(rootFolderFromGit,"src","examples"));
await generator.WriteDocusaurus(Path.Combine(rootFolderFromGit, "src","patternsSite","docs"));
await generator.WriteBlog(12);
await generator.WriteReadme(Path.Combine(rootFolderFromGit,"README.md"));
Console.WriteLine("done at " + DateTime.Now.ToString("HH:mm"));

