using Microsoft.EntityFrameworkCore;
Console.WriteLine("new pattern or enter");
var str=Console.ReadLine();
DbPatternContext cnt = new();
if (!string.IsNullOrEmpty(str))
{
    
    var low=str.ToLower();
    var exists = await cnt.PatternData.FirstOrDefaultAsync(it => it.Title.ToLower() == low);
    if (exists is null) {
        cnt.PatternData.Add(new()
        {
            Title = str,
        });
        await cnt.SaveChangesAsync();
        return;
    }
    else
    {
        Console.WriteLine($"{str} already exists");
        return;
    }

}

var all=await cnt.PatternData.ToArrayAsync();
foreach(var item in all)
{
    Console.WriteLine(item.Title);
}

