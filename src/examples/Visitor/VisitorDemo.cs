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