
# Pattern:  Visitor

Read online at https://ignatandrei.github.io/patterns/docs/patterns/Visitor

<!-- id : 12 -->
Visitor pattern is a way of separating an algorithm from an object structure on which it operates.    <br />
A practical result of this separation is the ability to add new operations to existing object structures without modifying the structures.    <br />

## Purpose of .NET implementation

Roslyn is a syntax analyzer for C#.    <br />
You want to provide a way for other  to analyze/modify the syntax of a C# code.    <br />
You can use the Visitor pattern to traverse the syntax tree and perform operations on the nodes of the tree.    <br />
The Visitor pattern allows you to separate the algorithm from the data structure, making it easier to add new operations to the syntax tree without modifying the existing classes.    <br />

## Example in .NET : 


###  Visitor
```csharp showLineNumbers title="Visitor example for Pattern Visitor"
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Visitor;
internal class VisitorDemo
{
    public static void VisitMethods()
    {
        var Code = @"""
using System;
namespace Test1
{
    class Program
    {
        static void Main(string[] args)
        {
              var dt=DateTime.Now;
			  Console.WriteLine(dt);
        }
     }
}

""";
        var tree = CSharpSyntaxTree.ParseText(Code);

        var node = tree.GetRoot();

        MethodVisiting LG = new MethodVisiting();
        //start visiting
        var sn = LG.Visit(node);

    }
}
public class MethodVisiting : CSharpSyntaxRewriter
{
    public override SyntaxNode? VisitMethodDeclaration(MethodDeclarationSyntax node)
    {
        if (node.Body == null || node.Body.Statements.Count == 0)
            return base.VisitMethodDeclaration(node);

        var parent = node.Parent as ClassDeclarationSyntax;
        
        if (parent == null)
            return base.VisitMethodDeclaration(node);

        var nameMethod = node.Identifier.Text;
        var nameClass = parent.Identifier.Text;
        Console.WriteLine($"visiting {nameMethod} from {nameClass}");

        return base.VisitMethodDeclaration(node);

    }
}
```


[Download source](/zipSourceCodes/visitor.zip)



## See Source Code for Microsoft implementation of Visitor

    <a href="https://github.com/dotnet/roslyn/blob/cecdb802007a49e346215c0afdce354d6c111112/src/Compilers/CSharp/Portable/Syntax/CSharpSyntaxRewriter.cs#L17" target="_blank">SourceCode CSharpSyntaxRewriter</a>
    <br />


## Learn More

    <a href="http://wiki.c2.com/?VisitorPattern" target="_blank">C2Wiki</a> <br />
    <a href="https://wiki.c2.com/?VisitorPattern" target="_blank">C2Wiki</a> <br />
    <a href="http://www.dofactory.com/net/visitor-design-pattern" target="_blank">dofactory</a> <br />
    <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-visitor" target="_blank">DPH</a> <br />
    <a href="https://en.wikipedia.org/wiki/Visitor_pattern" target="_blank">Wikipedia</a> <br />


## Homework


Implement a visitor that will allow you to calculate the total price of a shopping cart.    <br />
The shopping cart should contain items with a price and a quantity.    <br />
Visit every item and make the sum.    <br />


