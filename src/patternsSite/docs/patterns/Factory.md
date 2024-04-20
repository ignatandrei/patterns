---
id: Factory
title: Factory
tags:
  - Factory
  - https://github.com/ignatandrei/patterns

  - creational

  - design pattern

  - Factory
---

# Pattern:  Factory

A factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be new

## Example in .NET : 


###  Factory
```csharp showLineNumbers title="Factory example for Pattern Factory"
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Internal;
using System.Data.Common;
using System.Globalization;
using System.Net;
using System.Web.Mvc;

namespace Factory;
internal class FactoryDemo
{
    public static void DemoWebRequest()
    {
        HttpWebRequest hwr = (HttpWebRequest)WebRequest.Create("http://www.yahoo.com");

    }
    public static void DemoConvert()
    {
        string value = "1,500";
        Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("en-US");

        Console.WriteLine(Convert.ToDouble(value));

        Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("fr-FR");
        Console.WriteLine(Convert.ToDouble(value));

    }
    static void RegisterControllerFactory()
    {
        ControllerBuilder.Current.SetControllerFactory(new MyControllerFactory());
    }
}

//default controller factory is a factory of controllers
class MyControllerFactory : System.Web.Mvc.DefaultControllerFactory
{

    public override IController CreateController(System.Web.Routing.RequestContext requestContext, string controllerName)
    {
        if (controllerName == "andrei")
            return null;//maybe controller not found

        return base.CreateController(requestContext, controllerName);
    }
}
    
```


## Learn More

        <a href="https://en.wikipedia.org/wiki/Factory_pattern" target="_blank">Wikipedia</a> <br />
        <a href="http://wiki.c2.com/?FactoryPattern" target="_blank">C2Wiki</a> <br />
        <a href="https://www.danstroot.com/posts/2018-10-03-hammer-factories" target="_blank">Hammer Factories</a> <br />

## Homework

having multiple types of drinks( water, tea, coffee) with an IDrink interface  create a factory method ( with a parameter ) to create a drink  

