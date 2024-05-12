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

A factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be new.    <br />

## Purpose of .NET implementation


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


[Download source](/zipSourceCodes/factory.zip)



## See Source Code for Microsoft implementation of Factory

    <a href="https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Convert.cs" target="_blank">SourceCode Convert.ToDouble</a>
    <br />
    <a href="https://source.dot.net/#Microsoft.AspNetCore.Mvc.Core/Controllers/DefaultControllerFactory.cs" target="_blank">SourceCode DefaultControllerFactory</a>
    <br />
    <a href="https://referencesource.microsoft.com/#System/net/System/Net/WebRequest.cs" target="_blank">SourceCode WebRequest.Create</a>
    <br />


## Learn More

    <a href="http://wiki.c2.com/?FactoryPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/factory-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-factory" target="_blank">DPH</a> <br />
    <a href="https://www.danstroot.com/posts/2018-10-03-hammer-factories" target="_blank">Hammer Factories</a> <br />
    <a href="https://en.wikipedia.org/wiki/Factory_pattern" target="_blank">Wikipedia</a> <br />


## Homework


having multiple types of drinks( water, tea, coffee) with an IDrink interface  create a factory method ( with a parameter ) to create a drink.    <br />


