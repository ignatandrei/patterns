
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;

namespace PatternsData;
[DebuggerDisplay("{Id} {Title}")]
public class PatternData
{
    public int Id { get; set; }
    public string Title { get; set; }=string.Empty;
    [NotMapped]
    public string[] Description { get; set; } = Array.Empty<string>();

    public string Stage { get; set; } = string.Empty;
    public string DemoFileCsproj { get; set; } = string.Empty;
    public string Tags { get; set; } = string.Empty;
    public string ClassNames { get; set; } = string.Empty;
    [NotMapped]
    public string[] Homework { get; set; } = Array.Empty<string>();

    [NotMapped]
    public string[] Explanation { get; set; } = Array.Empty<string>();

    public Links[] Links { get; set; } = Array.Empty<Links>();
    
}
