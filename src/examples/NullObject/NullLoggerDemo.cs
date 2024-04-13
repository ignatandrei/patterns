
namespace NullObject;
internal class LogWithData
{
    ILogger _logger;
    public LogWithData(ILogger? logger=null)
    {
        _logger = logger ?? NullLogger.Instance;   
    }
    public void DoWork(string message)
    {
        _logger.LogInformation($"start work with {message}");
    }
}
