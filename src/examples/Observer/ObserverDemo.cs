
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
