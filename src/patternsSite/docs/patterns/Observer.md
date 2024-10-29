---
id: Observer
title: Observer
tags:
  - Observer
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - Observer
---

# Pattern:  Observer

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Observer

<!-- id : 18 -->
Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
## Purpose of .NET implementation

You want to see when properties of an object are modified, to know how to react in the GUI.    <br />
You can use the Observer pattern to notify the GUI when the properties of the object are modified.    <br />

## Example in .NET : 


###  Observer
```csharp showLineNumbers title="Observer example for Pattern Observer"

using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Observer;

/// <summary>
/// INotifyPropertyChanged is an interface that provides a mechanism for the object to notify clients that a property value has changed.
/// </summary>
public class Person: INotifyPropertyChanged
{
    private string name=string.Empty;
    public string Name
    {
        get => name;
        set
        {
            if (name == value) return;
            name = value;
            OnPropertyChanged();
        }
    }

    public event PropertyChangedEventHandler? PropertyChanged;

    protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = "")
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}
internal class ObserverDemo
{
    public static void Demo()
    {
        Person person = new ();
        //subscribe to the event to observe the changes
        person.PropertyChanged += (sender, args) =>
        {
            var p = sender as Person;
            Console.WriteLine($"Property {args.PropertyName} changed to {p?.Name}");
        };
        person.Name = "Andrei Ignat" ;
    }
}

```

<!-- delete start -->
[Download source](/zipSourceCodes/observer.zip)
<!-- delete end -->


## See Source Code for Microsoft implementation of Observer


[SourceCode INotifyPropertyChanged](https://source.dot.net/#System.ObjectModel/System/ComponentModel/INotifyPropertyChanged.cs) : https://source.dot.net/#System.ObjectModel/System/ComponentModel/INotifyPropertyChanged.cs


## Learn More


[Wikipedia](https://en.wikipedia.org/wiki/Observer_pattern) : https://en.wikipedia.org/wiki/Observer_pattern   


## Homework


Imagine you have a logger that logs to a file and to a console.    <br />
Implement an observable logger that will allow you to subscribe to the logger and to be notified when the logger logs a message.    <br />


