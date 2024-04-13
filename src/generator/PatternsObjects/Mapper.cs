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
        // custom after map code...
        return dto;
    }
}
