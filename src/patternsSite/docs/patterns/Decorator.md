---
id: Decorator
title: Decorator
tags:
  - Decorator
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - Decorator
---

# Pattern:  Decorator
<!-- id : 8 -->
Decorator allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.    <br />

## Purpose of .NET implementation


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


1.    <br />
Add a logging to DBConnection.    <br />
2.    <br />
Use by decorating a coffee with milk, sugar, and chocolate (and maybe other condiments).    <br />
The coffee should be able to display the condiments in a Display method and calculate the price of the coffee with milk, sugar, and chocolate.    <br />


