---
id: Iterator
title: Iterator
tags:
  - Iterator
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - DirectoryEnumerable
---

# Pattern:  Iterator

Iterator design pattern allows to traverse a container and access the container's elements.

## Example in .NET : 


###  DirectoryEnumerable
```csharp showLineNumbers title="DirectoryEnumerable example for Pattern Iterator"
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

```


## Learn More

        <a href="https://en.wikipedia.org/wiki/iterator_pattern" target="_blank">Wikipedia</a> <br />
        <a href="https://wiki.c2.com/?IteratorPattern" target="_blank">C2Wiki</a> <br />

## Homework

With the Yield keyword implement a function that return an IEnumerable of generic int that will return the first 10 numbers of the Fibonacci sequence

