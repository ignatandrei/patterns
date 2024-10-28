
# Pattern:  Factory

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Factory

<!-- id : 6 -->
A factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be new.    <br />

## Purpose of .NET implementation

For getting data from Web, you can have a HttpWebRequest or FtpWebRequest.    <br />
The type of the request depends on the protocol you want to use :  HTTP or FTP.    <br />
You want to make easier for the developer to create the appropriate request object based on the string that starts with the protocol.    <br />
So you can have the Factory pattern method : WebRequest.Create.    <br />

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

        //WebRequest.Create is a factory - can create HttpWebRequest or FtpWebRequest
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


[SourceCode Convert.ToDouble](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Convert.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Convert.cs

[SourceCode DefaultControllerFactory](https://source.dot.net/#Microsoft.AspNetCore.Mvc.Core/Controllers/DefaultControllerFactory.cs) : https://source.dot.net/#Microsoft.AspNetCore.Mvc.Core/Controllers/DefaultControllerFactory.cs

[SourceCode WebRequest.Create](https://referencesource.microsoft.com/#System/net/System/Net/WebRequest.cs) : https://referencesource.microsoft.com/#System/net/System/Net/WebRequest.cs


## Learn More


[C2Wiki](http://wiki.c2.com/?FactoryPattern) : http://wiki.c2.com/?FactoryPattern   

[dofactory](http://www.dofactory.com/net/factory-design-pattern) : http://www.dofactory.com/net/factory-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-factory) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-factory   

[Hammer Factories](https://www.danstroot.com/posts/2018-10-03-hammer-factories) : https://www.danstroot.com/posts/2018-10-03-hammer-factories   

[Wikipedia](https://en.wikipedia.org/wiki/Factory_pattern) : https://en.wikipedia.org/wiki/Factory_pattern   


## Homework


You want to create multiple types of drinks( water, tea, coffee).    <br />
With an IDrink interface  create a factory method ( with a parameter ) to create a drink.    <br />


