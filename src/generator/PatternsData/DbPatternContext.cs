namespace PatternsData;

public class DbPatternContext : DbContext
{
    public const string DatabaseName = "patternsData";
    public DbSet<PatternData> PatternData { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseFileBaseContextDatabase(DatabaseName, @"D:\gth\patterns\src\data");


    }

}
