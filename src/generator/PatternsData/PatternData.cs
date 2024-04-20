
namespace PatternsData;
public class PatternData
{
    public int Id { get; set; }
    public string Title { get; set; }=string.Empty;
    public string Description { get; set; } = string.Empty;

    public string Stage { get; set; } = string.Empty;
    public string DemoFileCsproj { get; set; } = string.Empty;
    public string Tags { get; set; } = string.Empty;
    public string ClassNames { get; set; } = string.Empty;
    public string Homework { get; set; } = string.Empty;

    public Links[] Links { get; set; } = Array.Empty<Links>();
    
}
