---
id: IOC
title: IOC
tags:
  - IOC
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - IOC

  - DI
---

# Pattern:  IOC
<!-- id : 13 -->
Inversion of Control is a principle in software engineering by which the control of objects or portions of a program is transferred to a container or framework.    <br />
It's a design principle in which custom-written portions of a computer program receive the flow of control from a generic framework.    <br />

## Purpose of .NET implementation

You want people to work with the file system . Possibly without a file or a directory that exists, but just with implementation.    <br />
You want to be able to test the code without the file system.    <br />
So you want to abstract the file system.    <br />
See file system abstraction in the links below.    <br />

## Examples in .NET : 


###  IOC
```csharp showLineNumbers title="IOC example for Pattern IOC"
namespace IOC;
public class NotificationService
{
    private readonly IMessageService _messageService;

    public NotificationService(IMessageService messageService)
    {
        _messageService = messageService;
    }

    public void SendNotification(string message)
    {
        _messageService.SendMessage(message);
    }
}
public interface IMessageService
{
    void SendMessage(string message);
}

```


###  DI
```csharp showLineNumbers title="DI example for Pattern IOC"

namespace IOC;
public class SMSService : IMessageService
{
    public void SendMessage(string message)
    {
        Console.WriteLine("Sending SMS: " + message);
    }
}

public class EmailService : IMessageService
{
    public void SendMessage(string message)
    {
        Console.WriteLine("Sending email: " + message);
    }
}

```


[Download source](/zipSourceCodes/ioc.zip)



## See Source Code for Microsoft implementation of IOC

    <a href="https://source.dot.net/#Microsoft.Extensions.DependencyInjection.Abstractions/ServiceCollection.cs" target="_blank">SourceCode ServiceCollection</a>
    <br />


## Learn More

    <a href="http://www.dofactory.com/net/InversionOfControl-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-InversionOfControl" target="_blank">DPH</a> <br />
    <a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/file-providers?view=aspnetcore-8.0" target="_blank">File Providers in ASP.NET Core</a> <br />


## Homework


Implement a simple IoC container that will allow you to register and resolve dependencies.    <br />
The container should be able to resolve dependencies by type and by name.    <br />


