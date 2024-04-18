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
    