﻿using Microsoft.EntityFrameworkCore;
DbPatternContext cnt = new(@"D:\gth\patterns\src\data");
//Console.WriteLine("new pattern or enter");
//var str = Console.ReadLine();
//if (!string.IsNullOrEmpty(str))
//{

//    var low=str.ToLower();
//    var exists = await cnt.PatternData.FirstOrDefaultAsync(it => it.Title.ToLower() == low);
//    if (exists is null) {
//        cnt.PatternData.Add(new()
//        {
//            Title = str,
//        });
//        await cnt.SaveChangesAsync();
//        return;
//    }
//    else
//    {
//        Console.WriteLine($"{str} already exists");
//        return;
//    }

//}

var all =await cnt.PatternData.ToArrayAsync();
//foreach(var item in all)
//{
//    Console.WriteLine("---------------");
//    Console.WriteLine(item.Title);
//    Console.WriteLine(item.Description);
//}
GeneratorFiles generator=new(all);
await generator.Initialize(@"D:\gth\patterns\src\examples");
await generator.WriteDocusaurus(@"D:\gth\patterns\src\patternsSite\docs\");
Console.WriteLine("done at "+DateTime.Now.ToString("HH:mm" ));
await generator.WriteBlog(4);
