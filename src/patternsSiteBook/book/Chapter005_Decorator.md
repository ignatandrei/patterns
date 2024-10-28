
# Pattern:  Decorator

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Decorator

<!-- id : 8 -->
Decorator allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.    <br />

## Purpose of .NET implementation

Stream is a perfect example of the Decorator pattern.    <br />
Imagine you want to write a text to a file, but you want to add some additional functionality(or not, at will) to the stream, such as  compression or encryption..    <br />
By using the Decorator pattern, you can easily compose streams with different behaviors to create custom stream objects that meet specific requirements.    <br />
Each stream class focuses on a single responsibility. FileStream handles file I/O, CryptoStream handles encryption and decryption, and GZipStream handles compression and decompression. This makes the classes easier to understand, test, and maintain..    <br />

## Example in .NET : 


###  Decorator
```csharp showLineNumbers title="Decorator example for Pattern Decorator"

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

```


[Download source](/zipSourceCodes/decorator.zip)



## See Source Code for Microsoft implementation of Decorator

    <a href="https://source.dot.net/#System.Security.Cryptography/System/Security/Cryptography/CryptoStream.cs" target="_blank">SourceCode CryptoStream</a>
    <br />
    <a href="https://source.dot.net/#System.IO.Compression/System/IO/Compression/GZipStream.cs" target="_blank">SourceCode GZipStream</a>
    <br />


## Learn More

    <a href="http://wiki.c2.com/?DecoratorPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/decorator-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-decorator" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Prototype_pattern" target="_blank">Wikipedia</a> <br />


## Homework


1.Create a LoggingDbConnectionDecorator class that adds logging functionality to a DbConnection object..    <br />
This class should log the details of the operations performed on the DbConnection (like opening a connection, closing a connection, executing a command, etc.) to a log file or console..    <br />
2.Your task is to model a coffee shop ordering system using the Decorator design pattern. The base component will be a coffee, and you will create decorators for adding milk, sugar, and chocolate..    <br />
The coffee should be able to display the condiments in a Display method and calculate the price of the coffee with milk, sugar, and chocolate.    <br />


