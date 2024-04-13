using System;
using System.IO;

namespace NullObject;
internal class EmptyFolderDemo
{
    public static void DemoWithCreateNewFolder()
    {
        //start example 1
        var env = Environment.CurrentDirectory;
        var guid = Guid.NewGuid().ToString("X");
        var fldEmpty = Path.Combine(env, guid);
        //create empty folder
        Directory.CreateDirectory(fldEmpty);
        var files= Directory.GetFiles(fldEmpty);
        Console.WriteLine($"files.Length:{files.Length}");
        //end example 1
        
    }
}
