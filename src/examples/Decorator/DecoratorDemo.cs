
namespace Decorator;
internal class DecoratorDemo
{
    public static void Stream_Crypto_Gzip()
    {
        string nameFile = "test.txt";
        if (File.Exists(nameFile))
            File.Delete(nameFile);
        byte[] data = ASCIIEncoding.ASCII.GetBytes("Hello World!");
        //first time we have a stream
        using (var stream = new FileStream(nameFile, FileMode.OpenOrCreate, FileAccess.Write))
        {
            //stream.Write(data, 0, data.Length);
            //return;
            
            var cryptic = new DESCryptoServiceProvider();

            cryptic.Key = ASCIIEncoding.ASCII.GetBytes("ABCDEFGH");
            cryptic.IV = ASCIIEncoding.ASCII.GetBytes("ABCDEFGH");
            //we decorate the initial stream with a crypto stream
            using (var crStream = new CryptoStream(stream, cryptic.CreateEncryptor(), CryptoStreamMode.Write))
            {
                //and we decorate further by encoding
                using (var gz = new GZipStream(crStream, CompressionLevel.Optimal))
                {
                    gz.Write(data, 0, data.Length);
                }

            }
        }
    }
}
