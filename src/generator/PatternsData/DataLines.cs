
namespace PatternsData;
public class DescriptionDataLines : DataLines
{

}
public class DataLines
{
    public int Id { get; set; }
    public string Line1 { get; set; } = string.Empty;
    public string Line2 { get; set; } = string.Empty;
    public string Line3 { get; set; } = string.Empty;
    public string Line4 { get; set; } = string.Empty;
    public string Line5 { get; set; } = string.Empty;

    public string Line6 { get; set; } = string.Empty;
    public string Line7 { get; set; } = string.Empty;
    public string Line8 { get; set; } = string.Empty;
    public string Line9 { get; set; } = string.Empty;
    public string Line10 { get; set; } = string.Empty;

    public string[] Lines()
    {
        var l= new string[] { Line1, Line2, Line3, Line4, Line5, Line6, Line7, Line8, Line9, Line10 };
        l=l.Where(a => !string.IsNullOrWhiteSpace(a)).ToArray();
        return l;
    }
}
