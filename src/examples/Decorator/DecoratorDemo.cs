
namespace Decorator;
internal class DecoratorDemo
{
    public static void Stream_Crypto_Gzip()
    {
        string nameFile = "test.txt";
        if (File.Exists(nameFile))
            File.Delete(nameFile);
        byte[] data = ASCIIEncoding.ASCII.GetBytes("Hello World!");
        // Creates a FileStream (the ConcreteComponent in the Decorator pattern context).
        using (var stream = new FileStream(nameFile, FileMode.OpenOrCreate, FileAccess.Write))
        {
            //stream.Write(data, 0, data.Length);
            //return;
            
            var cryptic = new DESCryptoServiceProvider();

            cryptic.Key = ASCIIEncoding.ASCII.GetBytes("ABCDEFGH");
            cryptic.IV = ASCIIEncoding.ASCII.GetBytes("ABCDEFGH");
            // Decorates the FileStream with a CryptoStream (the first Decorator).
            using (var crStream = new CryptoStream(stream, cryptic.CreateEncryptor(), CryptoStreamMode.Write))
            {
                // Further decorates the CryptoStream with a GZipStream (the second Decorator).
                using (var gz = new GZipStream(crStream, CompressionLevel.Optimal))
                {
                    gz.Write(data, 0, data.Length);
                }

            }
        }
    }
}
