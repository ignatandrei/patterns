using System;

namespace NullObject
{
    class Program
    {
        static void Main(string[] args)
        {
            EmptyFolderDemo.DemoWithCreateNewFolder();
            new LogWithData().DoWork("test");
        }

    }
}
