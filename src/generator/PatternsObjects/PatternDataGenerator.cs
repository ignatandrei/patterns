namespace PatternsObjects;
public class PatternDataGenerator
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;

    public string LinkWikipedia { get; set; } = string.Empty;
    public string DemoFileCsproj { get; set; } = string.Empty;
    public string Tags { get; set; } = string.Empty;
    public string ClassNames { get; set; } = string.Empty;
    public string Homework { get; set; } = string.Empty;

    public string[] TagsArray()
    {

        return Tags.Split(",");
    }
    public async Task<string> DataDocusaurus()
    {
        var template = new Pattern(this);
        var data = await template.RenderAsync();
        return await Task.FromResult(data);
    }
}
