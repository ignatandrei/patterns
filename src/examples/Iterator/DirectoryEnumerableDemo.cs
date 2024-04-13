namespace Iterator;
internal class DirectoryEnumerableDemo
{
    public static void DirectoryEnumerableFiles(int nrMaxFiles)
    {
        var count = 0;
        //what if we called Directory.GetFiles        
        foreach (var file in Directory.EnumerateFiles(@"c:\","*.*",SearchOption.AllDirectories))
        {
            count++;
            if (count > nrMaxFiles)
                break;
            Console.WriteLine(file);
        }
    }
}
