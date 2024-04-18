namespace Chain;

public static class ChainDemo
{
    public static int SecondException()
    {
        try
        {
            FirstException();
            return 5;
        }
        catch (Exception ex)
        {
            throw new Exception($"from {nameof(SecondException)}", ex);
        }
    }
    static int FirstException()
    {
        throw new ArgumentException("argument");
    }
}
