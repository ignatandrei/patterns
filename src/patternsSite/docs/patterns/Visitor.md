---
id: Visitor
title: Visitor
tags:
  - Visitor
  - https://github.com/ignatandrei/patterns

  - behavioral

  - design pattern

  - Visitor
---

# Pattern:  Visitor

Visitor pattern is a way of separating an algorithm from an object structure on which it operates. A practical result of this separation is the ability to add new operations to existing object structures without modifying the structures.

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


## Learn More

        <a href="http://wiki.c2.com/?VisitorPattern" target="_blank">C2Wiki</a> <br />
        <a href="https://wiki.c2.com/?VisitorPattern" target="_blank">C2Wiki</a> <br />
        <a href="http://www.dofactory.com/net/visitor-design-pattern" target="_blank">dofactory</a> <br />
        <a href="https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file#-visitor" target="_blank">DPH</a> <br />
        <a href="https://en.wikipedia.org/wiki/Visitor_pattern" target="_blank">Wikipedia</a> <br />

## Homework

Implement a visitor that will allow you to calculate the total price of a shopping cart. The shopping cart should contain items with a price and a quantity.Visit every item and make the sum

