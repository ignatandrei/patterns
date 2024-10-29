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

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Iterator

<!-- id : 3 -->
Iterator design pattern allows to traverse a container and access the container's elements.
## Purpose of .NET implementation

Any collection should be able to loop through its elements.    <br />
So the iterator pattern could be retrieved almost anywhere in Array, IEnumerable , Hashset, List, and more.    <br />

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

<!-- delete start -->
[Download source](/zipSourceCodes/iterator.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of Iterator


[SourceCode Directory.GetFiles](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/IO/Directory.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/IO/Directory.cs

[SourceCode IEnumerable](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Collections/IEnumerable.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Collections/IEnumerable.cs

[SourceCode IEnumerator](https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Collections/IEnumerator.cs) : https://source.dot.net/#System.Private.CoreLib/src/libraries/System.Private.CoreLib/src/System/Collections/IEnumerator.cs


## Learn More


[C2Wiki](https://wiki.c2.com/?IteratorPattern) : https://wiki.c2.com/?IteratorPattern   

[dofactory](http://www.dofactory.com/net/Iterator-design-pattern) : http://www.dofactory.com/net/Iterator-design-pattern   

[DPH](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Iterator) : https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-Iterator   

[Wikipedia](https://en.wikipedia.org/wiki/iterator_pattern) : https://en.wikipedia.org/wiki/iterator_pattern   


## Homework


With the Yield keyword implement a function that return an IEnumerable of generic int that will return the first 10 numbers of the Fibonacci sequence.    <br />


