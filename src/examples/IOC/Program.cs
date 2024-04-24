using IOC;
using Microsoft.Extensions.DependencyInjection;
using System;
// Setup DI container
var serviceProvider = new ServiceCollection()
    .AddTransient<IMessageService, EmailService>() // Register EmailService as IMessageService
    //uncomment the following line to send sms instead of email
    //.AddTransient<IMessageService, SMSService>()  // Register SMSService as IMessageService
    .AddTransient<NotificationService>()           // Register NotificationService
    .BuildServiceProvider();

// Resolve and use NotificationService
var notificationService = serviceProvider.GetRequiredService<NotificationService>();
notificationService.SendNotification("Hello, world!");
