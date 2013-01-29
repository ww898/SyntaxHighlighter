// WinDbg x86/x64 stack dump brush for Syntax Highlighter (10.11.2012)
// Copyright (C) 2012 Mikhail Pilin
// This software is freely used but, distributed only from here http://pilin.name/scripts/shBrushWinDbgStack.js

SyntaxHighlighter.brushes.WinDbgStack=function()
{
  this.regexList=
  [
    {regex:/\b(0x)?[0-9a-f`]+h?\b/gmi,css:"color1 bold"},
  ]
};
SyntaxHighlighter.brushes.WinDbgStack.prototype=new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.WinDbgStack.aliases=["windbg_stack","windbg_stack_x86","windbg_stack_x64"];
