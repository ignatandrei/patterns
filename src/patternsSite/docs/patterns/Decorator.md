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

Decorator allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

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


## Learn More

        <a href="http://wiki.c2.com/?DecoratorPattern" target="_blank">C2Wiki</a> <br />
        <a href="http://www.dofactory.com/net/decorator-design-pattern" target="_blank">dofactory</a> <br />
        <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-decorator" target="_blank">DPH</a> <br />
        <a href="https://en.wikipedia.org/wiki/Prototype_pattern" target="_blank">Wikipedia</a> <br />

## Homework

1. Add a logging to DBConnection . 2. Use by decorating a coffee with milk, sugar, and chocolate (and maybe other condiments). The coffee should be able to display the condiments in a Display method and calculate the price of the coffee with milk, sugar, and chocolate.

