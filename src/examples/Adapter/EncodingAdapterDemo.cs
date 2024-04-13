namespace Adaptor;
internal class EncodingAdapterDemo
{
    /// <summary>
    ///Adaptee  - string 
    ///Target  - bytes
    ///Adapter  - encoding
    ///Target Method - GetBytes
    /// </summary>
    public static void AdapterStringByte()
    {
        var url = "http://msprogrammer.serviciipeweb.ro";
        Encoding e = new ASCIIEncoding();
        var b = e.GetBytes(url);

        Console.WriteLine($"from {e.EncodingName} number bytes {b.Length}");

        e = new UTF32Encoding();
        b = e.GetBytes(url);
        Console.WriteLine($"from {e.EncodingName} number bytes {b.Length}");

    }


}
