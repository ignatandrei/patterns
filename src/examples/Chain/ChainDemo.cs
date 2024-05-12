namespace Chain;

public static class ChainDemo
{
    public static int SecondException()
    {
        try
        {
            // Calls 'FirstException' method which is known to throw an exception.
            FirstException();
            return 5;
        }
        catch (Exception ex)
        {
            // Throws a new exception, chaining the caught exception 'ex' as the inner exception.
            // This adds context to the exception, indicating it originated from 'SecondException'.
            throw new Exception($"from {nameof(SecondException)}", ex);
        }
    }
    static int FirstException()
    {

        throw new ArgumentException("argument");
    }
}
