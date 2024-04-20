namespace PatternsObjects;
[Mapper]
public partial class Mapper
{
    private static partial PatternDataGenerator PatternData2PatternDataGenerator(PatternData p);

    [UserMapping(Default = true)]
    public static PatternDataGenerator MapPDToPDG(PatternData obj)
    {
        // custom before map code...
        var dto = PatternData2PatternDataGenerator(obj);
        var title = dto.Title;
        dto.Title= $"{char.ToUpper(title[0])}{title[1..]}";
        dto.Links=dto.Links.OrderBy(l=>l.Name).ToArray();
        return dto;
    }
}
