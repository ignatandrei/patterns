namespace PatternsData;

public class DbPatternContext : DbContext
{
    public DbPatternContext(string folder)
    {
        this.folder = folder;
    }
    public const string DatabaseName = "patternsData";
    private readonly string folder;

    public DbSet<PatternData> PatternData { get; set; }

    public DbSet<Links> Links { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseFileBaseContextDatabase(DatabaseName, folder);


    }

}
