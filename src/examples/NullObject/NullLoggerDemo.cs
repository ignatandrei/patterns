
namespace NullObject;
internal class LogWithData
{
    ILogger _logger;
    public LogWithData(ILogger? logger=null)
    {
        // If logger is null, use NullLogger.Instance
        // This is the Null Object pattern in action
        _logger = logger ?? NullLogger.Instance;   
    }
    public void DoWork(string message)
    {
        // Even if _logger is NullLogger.Instance, this line won't throw a null reference exception
        // because NullLogger.Instance is a non-functional implementation of ILogger
        _logger.LogInformation($"start work with {message}");
    }
}
