
/* Ejemplo para la gramatica del interprete */

/* Definicion lexica */
%lex
%options case-insensitive 

//Expresiones regulares
num [0-9]+
id      ([a-zA-Z])[a-zA-Z0-9_ñÑ]*

//--> Cadena
escapechar      [\'\"\\ntr]
escape          \\{escapechar}
aceptacion      [^\"\\] 
cadena          (\"({escape} | {aceptacion})*\")

//--> Caracter 
escapechar2      [\'\"\\ntr]
escape2          \\{escapechar2}
aceptacion2      [^\'\\] 
//caracter         (\'({escape2} | {aceptacion2})\')
caracter        \'[^\']*\' 
%%

/* Comentarios */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]        {/*ignoramos los comentarios*/}
[/][/].*                                   {/*ignoramos los comentarios*/} 
"tocharArray" { console.log("Reconocio : "+ yytext); return 'chararray'}
"new"  { console.log("Reconocio : "+ yytext); return 'new'}
"(int)"  { console.log("Reconocio : "+ yytext); return 'casteoint'}
"(double)"  { console.log("Reconocio : "+ yytext); return 'casteodouble'}
"toString"  { console.log("Reconocio : "+ yytext); return 'casteostring'}
"(char)"  { console.log("Reconocio : "+ yytext); return 'casteochar'}
"typeOf"  { console.log("Reconocio : "+ yytext); return 'casteotipo'}
"toLower"  { console.log("Reconocio : "+ yytext); return 'casteotolower'}
"toUpper"  { console.log("Reconocio : "+ yytext); return 'casteotoupper'}
"length"  { console.log("Reconocio : "+ yytext); return 'length'}
"round"  { console.log("Reconocio : "+ yytext); return 'round'}

/* Simbolos del programa */

"--"                  { console.log("Reconocio : " + yytext);  return 'decremento' } 
"++"                  { console.log("Reconocio : " + yytext);  return 'incremento' } 
"=="                  { console.log("Reconocio : " + yytext);  return 'dobleigual' } 
"**"                  { console.log("Reconocio : " + yytext);  return 'potencia' } 

"%"                  { console.log("Reconocio : " + yytext);  return 'modulo' } 
"("                  { console.log("Reconocio : " + yytext);  return 'parentesisa' } 
")"                  { console.log("Reconocio : " + yytext);  return 'parentesisc' } 
"["                  { console.log("Reconocio : " + yytext);  return 'corchetea' } 
"]"                  { console.log("Reconocio : " + yytext);  return 'corchetec' } 
";"                  { console.log("Reconocio : " + yytext);  return 'puntocoma' } 
"="                  { console.log("Reconocio : " + yytext);  return 'igual' } 
","                  { console.log("Reconocio : " + yytext);  return 'coma' } 
"{"                  { console.log("Reconocio : "+ yytext); return 'llavea'}
"}"                  { console.log("Reconocio : "+ yytext); return 'llavec'}
"?"                  { console.log("Reconocio : "+ yytext); return 'interrogacion'}
":"                  { console.log("Reconocio : "+ yytext); return 'dospuntos'}

/* OPERADORES ARITMETICOS */
"+"                  { console.log("Reconocio : " + yytext);  return 'mas' } 
"**"                  { console.log("Reconocio : " + yytext);  return 'potencia' } 
"*"                  { console.log("Reconocio : " + yytext);  return 'multiplicacion' } 
"/"                  { console.log("Reconocio : " + yytext);  return 'division' } 
"-"                  { console.log("Reconocio : " + yytext);  return 'menos' } 
"%"                  { console.log("Reconocio : " + yytext);  return 'modulo' }


/* OPERADORES RELACIONALES */
">="                  { console.log("Reconocio : " + yytext);  return 'mayorigual' } 
">"                  { console.log("Reconocio : " + yytext);  return 'mayorque' }
"<="                  { console.log("Reconocio : " + yytext);  return 'menorigual' } 
"<"                  { console.log("Reconocio : " + yytext);  return 'menorque' } 
"!="                  { console.log("Reconocio : " + yytext);  return 'diferente' }

/* OPERADORES LOGICOS */
"&&"                  { console.log("Reconocio : " + yytext);  return 'and' } 
"||"                  { console.log("Reconocio : " + yytext);  return 'or' } 
"!"                  { console.log("Reconocio : " + yytext);  return 'not' }
"^"                  { console.log("Reconocio : " + yytext);  return 'xor' }


/*Palabras reservadas*/
"evaluar"                  { console.log("Reconocio : " + yytext);  return 'evaluar' } 
"true"                  { console.log("Reconocio : " + yytext);  return 'true' } 
"false"                  { console.log("Reconocio : " + yytext);  return 'false' } 

"int"                  { console.log("Reconocio : " + yytext);  return 'int' } 
"double"                  { console.log("Reconocio : " + yytext);  return 'double' } 
"string"                  { console.log("Reconocio : " + yytext);  return 'string' } 
"char"                  { console.log("Reconocio : " + yytext);  return 'char' } 
"boolean"                  { console.log("Reconocio : " + yytext);  return 'boolean' }
"const"                  { console.log("Reconocio : " + yytext);  return 'const' }

"writeline"                  { console.log("Reconocio : " + yytext);  return 'writeline' }
"print"                 { console.log("Reconocio : " + yytext);  return 'print' }
"println"                 { console.log("Reconocio : " + yytext);  return 'println' }

"if"               { console.log("Reconocio : "+ yytext); return 'if'}
"while"            { console.log("Reconocio : "+ yytext); return 'while'}
"do"            { console.log("Reconocio : "+ yytext); return 'do'}
"else"             { console.log("Reconocio : "+ yytext); return 'else'}
"break"            { console.log("Reconocio : "+ yytext); return 'break'}

"for"            { console.log("Reconocio : "+ yytext); return 'for'}
"switch"            { console.log("Reconocio : "+ yytext); return 'switch'}
"case"            { console.log("Reconocio : "+ yytext); return 'case'}
"tostring"            { console.log("Reconocio : "+ yytext); return 'tostring'}
"toupper"            { console.log("Reconocio : "+ yytext); return 'toupper'}
"default"            { console.log("Reconocio : "+ yytext); return 'default'}

"continue"            { console.log("Reconocio : "+ yytext); return 'continue'}

"run"            { console.log("Reconocio : "+ yytext); return 'run'}
"void"            { console.log("Reconocio : "+ yytext); return 'void'}
"call"            { console.log("Reconocio : "+ yytext); return 'call'}

"return"            { console.log("Reconocio : "+ yytext); return 'return'}



//SIMBOLOS ER

[0-9]+("."[0-9]+)\b  { console.log("Reconocio : " + yytext);  return 'decimal' } 
{num}                 { console.log("Reconocio : " + yytext);  return 'entero' } 
{id}                 { console.log("Reconocio : " + yytext);  return 'id' } 
{cadena}                 { console.log("Reconocio : " + yytext);  return 'cadena' } 
{caracter}                 { console.log("Reconocio : " + yytext);  return 'caracter' } 


/*Espacios*/
[\s\r\n\t]             {}
\s+                   {}
"//".*                {}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] {}

<<EOF>>               return 'EOF'
.                     { console.log("Error Lexico "+yytext
                        +" linea "+yylineno
                        +" columna "+(yylloc.last_column+1));

                        new errores.default('Lexico', 'El caracter ' + yytext 
                                + ' no forma parte del lenguaje', 
                                yylineno+1, 
                                yylloc.last_column+1); 
                                      
                        }

/lex

// area de imports
%{
        const evaluar = require('../Interprete/Evaluar');
        const aritmetica = require('../Interprete/Expresiones/Operaciones/Aritmetica');
        const primitivo = require('../Interprete/Expresiones/Primitivo');

        const writeline = require('../Interprete/Instrucciones/WriteLine')
        const declaracion = require('../Interprete/Instrucciones/Declaracion')
        const ast = require('../Interprete/Ast/Ast')
        const tipo = require('../Interprete/TablaSimbolos/Tipo')
        const identificador = require('../Interprete/Expresiones/Identificador')

        const relacional = require('../Interprete/Expresiones/Operaciones/Relacional');
        const logica = require('../Interprete/Expresiones/Operaciones/Logica');

        const asignacion = require('../Interprete/Instrucciones/Asignacion');
        const Ifs = require('../Interprete/Instrucciones/SentenciasControl/Ifs');
        const While = require('../Interprete/Instrucciones/SentenciasCiclica/While');
        const DoWhile = require('../Interprete/Instrucciones/SentenciasCiclica/DoWhile');
        const ternario = require('../Interprete/Expresiones/Ternario');
        const detener = require('../Interprete/Instrucciones/SentenciasTransferencia/Break');

        const Switch = require('../Interprete/Instrucciones/SentenciasControl/Switch');
        const caso = require('../Interprete/Instrucciones/SentenciasControl/Caso'); 
        const For = require('../Interprete/Instrucciones/SentenciasCiclica/For');

        const continuar = require('../Interprete/Instrucciones/SentenciasTransferencia/Continue');

        const funcion = require('../Interprete/Instrucciones/Funcion');
        const llamada = require('../Interprete/Instrucciones/Llamada');
        const startwith = require('../Interprete/Instrucciones/StartWith');
        const simbolo = require('../Interprete/TablaSimbolos/Simbolo')
        const retorno = require('../Interprete/Instrucciones/SentenciasTransferencia/Return');

        const bloque = require('../Interprete/Instrucciones/bloque');

        const errores = require('../Interprete/Ast/Errores')
%}

/* PRECEDENCIA */
%right 'interrogacion'
%left 'or'
%left 'and'
%left 'xor'
%right 'not' 'casteodouble' 'casteoint' 'casteostring' 'casteochar' 'casteotipo' 'casteotolower' 'casteotoupper' 'length' 'round'
%left 'dobleigual' 'diferente' 'menorque' 'menorigual' 'mayorque' 'mayorigual'
%left 'mas' 'menos'
%left 'division'  'multiplicacion' 
%left 'potencia' 
%right 'modulo'
%right UMINUS


%start INICIO

%% /* language grammar */

INICIO : INSTRUCCIONES EOF  { $$ = new ast.default($1); return $$ };

INSTRUCCIONES : INSTRUCCIONES INSTRCCION   { $$ = $1; $$.push($2); }
            | INSTRCCION                   { $$ = new Array(); $$.push($1); }
            ;

INSTRCCION : DECLARACION   { $$ =  $1;}
            | DECLARACION2  { $$ =  $1;}
            | STARTWITH     { $$ = $1; }
            | WRITELINE     { $$ = $1; }
            | ASIGNACION    { $$ = $1; }
            | SENTENCIA_IF       { $$ = $1; }
            | SENTENCIA_IF_SIMPLE    { $$ = $1; }
            | BLOQUE        { $$ = $1; }
            | SENTENCIA_WHILE    { $$ = $1; } 
            | SENTENCIA_DO_WHILE  { $$ = $1; } 
            | break puntocoma     { $$ = new detener.default(); }
            | SENTENCIA_SWITCH   { $$ = $1; } 
            | SENTENCIA_FOR       { $$ = $1; } 
            | id decremento puntocoma  { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | id incremento puntocoma { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | decremento id puntocoma  { $$ = new asignacion.default($2, new aritmetica.default(new identificador.default($2, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | incremento id puntocoma { $$ = new asignacion.default($2, new aritmetica.default(new identificador.default($2, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | continue puntocoma  { $$ = new continuar.default(); }
            | FUNCIONES     { $$ = $1; } 
            | LLAMADA puntocoma   { $$ = $1; } 
            | return puntocoma        { $$ = new retorno.default(null); } 
            | return E puntocoma      { $$ = new retorno.default($2); } 
            | error         { console.log("Error Sintactico: " + yytext 
                                    + " linea: " + this._$.first_line 
                                    + " columna: " + this._$.first_column); 
                        
                                new errores.default("Sintactico", "No se esperaba el caracter "+ yytext , 
                                                this._$.first_line ,this._$.first_column);            
                            }
            ;

DECLARACION : TIPO LISTA_IDS igual E puntocoma  { $$ = new declaracion.default($1, $2, $4,@1.first_line, @1.last_column);}  
            | TIPO LISTA_IDS puntocoma         { $$ = new declaracion.default($1, $2, null,  @1.first_line, @1.last_column);}
            | TIPO LISTA_IDS corchetea corchetec igual new TIPO corchetea E corchetec puntocoma         { $$ = new declaracion.default($1, $2, null,  @1.first_line, @1.last_column,$7,$9);}
            | TIPO LISTA_IDS corchetea E corchetec igual corchetea LISTASIMPLE corchetec  puntocoma         { $$ = new declaracion.default($1, $2, null,  @1.first_line, @1.last_column,$1,$4);}
            | TIPO LISTA_IDS corchetea corchetec corchetea corchetec igual new TIPO corchetea E corchetec corchetea E corchetec puntocoma         { $$ = new declaracion.default($1, $2, null,  @1.first_line, @1.last_column);}
            | TIPO corchetea corchetec LISTA_IDS igual E puntocoma { $$ = new declaracion.default($1, $4, $6,  @1.first_line, @1.last_column);}
            | TIPO LISTA_IDS corchetea E corchetec corchetea E corchetec igual corchetea DOUBLEARRAY  corchetec puntocoma      { $$ = new declaracion.default($1, $2, null,  @1.first_line, @1.last_column,$1,$4,$7,$11);}
            ;

DECLARACION2 : const TIPO LISTA_IDS igual E puntocoma { $$ = new declaracion.default($2, $3, $5,  @1.first_line, @1.last_column, null, null, null, null, $1);}
             ;            

DOUBLEARRAY : DOUBLEARRAY coma corchetea LISTASIMPLE corchetec { $$ = $1; $$.push($4);}
            | corchetea LISTASIMPLE corchetec   {$$= new Array(); $$.push($2);}
	    ;

LISTASIMPLE : LISTASIMPLE coma E { $$ = $1; $$.push($3);}
	    | E  {$$= new Array(); $$.push($1);}
	    ;

TIPO : int       {$$ = new tipo.default("ENTERO"); }
     | double    {$$ = new tipo.default("DOBLE"); }
     | string    {$$ = new tipo.default("CADENA"); }
     | char      {$$ = new tipo.default("CARACTER"); }
     | boolean   {$$ = new tipo.default("BOOLEANO"); }  
     ;

LISTA_IDS : LISTA_IDS coma id   { $$ = $1; $$.push($3); }
          | id                  { $$ = new Array(); $$.push($1); }
          ;

WRITELINE : println parentesisa E parentesisc puntocoma { $$ = new writeline.default($3,true,@1.first_line, @1.last_column); }
        |  print parentesisa E parentesisc puntocoma { $$ = new writeline.default($3,false,@1.first_line, @1.last_column); }
        ;

ASIGNACION : id igual E puntocoma   { $$ = new asignacion.default($1, $3, @1.first_line, @1.last_column); }
        |  id corchetea E corchetec igual E puntocoma   { $$ = new asignacion.default($1, $6, @1.first_line, @1.last_column,$3); }
        |  id corchetea E corchetec corchetea E corchetec igual E puntocoma   { $$ = new asignacion.default($1, $9, @1.first_line, @1.last_column,$3,$6); }
        ;

SENTENCIA_IF : if parentesisa E parentesisc llavea INSTRUCCIONES llavec { $$ = new Ifs.default($3, $6, [], @1.first_line, @1.last_column); }
        | if parentesisa E parentesisc llavea INSTRUCCIONES llavec else llavea INSTRUCCIONES llavec { $$ = new Ifs.default($3, $6, $10, @1.first_line, @1.last_column); }
        | if parentesisa E parentesisc llavea INSTRUCCIONES llavec else SENTENCIA_IF { $$ = new Ifs.default($3, $6, [$9], @1.first_line, @1.last_column); }
        ;

SENTENCIA_IF_SIMPLE : if parentesisa E parentesisc INSTRUCCION_IF_SIMPLE { $$ = new Ifs.default($3, [$5], [], @1.first_line, @1.last_column); }
                | if parentesisa E parentesisc INSTRUCCION_IF_SIMPLE else INSTRUCCION_IF_SIMPLE { $$ = new Ifs.default($3, [$5], [$7], @1.first_line, @1.last_column); }
                | if parentesisa E parentesisc INSTRUCCION_IF_SIMPLE else SENTENCIA_IF_SIMPLE  { $$ = new Ifs.default($3, [$5], [$7], @1.first_line, @1.last_column); }
                ;

INSTRUCCION_IF_SIMPLE : DECLARACION   { $$ =  $1;}
            | DECLARACION2  { $$ =  $1;}
            | WRITELINE     { $$ = $1; }
            | ASIGNACION    { $$ = $1; }
            | break puntocoma     { $$ = new detener.default(); }
            | id decremento puntocoma  { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | id incremento puntocoma { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | decremento id puntocoma  { $$ = new asignacion.default($2, new aritmetica.default(new identificador.default($2, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | incremento id puntocoma { $$ = new asignacion.default($2, new aritmetica.default(new identificador.default($2, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
            | continue puntocoma  { $$ = new continuar.default(); }
            | LLAMADA puntocoma   { $$ = $1; } 
            | return puntocoma        { $$ = new retorno.default(null); } 
            | return E puntocoma      { $$ = new retorno.default($2); } 
;          

BLOQUE: llavea INSTRUCCIONES llavec { $$ = new bloque.default($2, @1.first_line, @1.last_column); }
        ;

SENTENCIA_WHILE : while parentesisa E parentesisc llavea INSTRUCCIONES llavec { $$ = new While.default($3, $6, @1.first_line, @1.last_column);  }
            ;


SENTENCIA_DO_WHILE : do llavea INSTRUCCIONES llavec while parentesisa E parentesisc puntocoma  { $$ = new DoWhile.default($7, $3, @1.first_line, @1.last_column);  }
            ;

SENTENCIA_FOR : for parentesisa DEC_ASIG_FOR puntocoma E puntocoma ACTUALIZACION_FOR parentesisc llavea INSTRUCCIONES llavec { $$ = new For.default($3, $5, $7, $10, @1.first_line, @1.last_column); }
        ;
// for(i = 0 ; ...)
DEC_ASIG_FOR : TIPO id igual E  { $$ = new declaracion.default($1, $2, $4,  @1.first_line, @1.last_column);} 
            | id igual E        { $$ = new asignacion.default($1, $3, @1.first_line, @1.last_column); }
            ;
//x = 0
// i --
// i++ 
// x++ 
// print(x) -> 1
// i = i + 1 
ACTUALIZACION_FOR : id decremento { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
                | id incremento   { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
                | id igual E { $$ = new asignacion.default($1, $3, @1.first_line, @1.last_column); }
                ;

SENTENCIA_SWITCH : switch parentesisa E parentesisc llavea CASELIST llavec           { $$ = new Switch.default($3, $6, null, @1.first_line, @1.last_column); }
            | switch parentesisa E parentesisc llavea CASELIST DEFAULT llavec   { $$ = new Switch.default($3, $6, $7, @1.first_line, @1.last_column); }
            | switch parentesisa E parentesisc llavea DEFAULT llavec            { $$ = new Switch.default($3, [], $6, @1.first_line, @1.last_column); }
            ;

CASELIST : CASELIST CASO         { $$ = $1; $$.push($2); }
        | CASO                   { $$ = new Array(); $$.push($1); }
        ;

CASO : case E dospuntos INSTRUCCIONES  { $$ = new caso.default($2, $4, @1.first_line, @1.last_column); }
    ;

DEFAULT : default dospuntos INSTRUCCIONES { $$ = new caso.default(null, $3, @1.first_line, @1.last_column);}
        ;

FUNCIONES 
        : TIPO id parentesisa LISTA_DE_PARAMETROS parentesisc llavea INSTRUCCIONES llavec { $$ = new funcion.default(2, $1, $2, $4, false, $7,  @1.first_line, @1.last_column); }
        | TIPO id parentesisa parentesisc llavea INSTRUCCIONES llavec               { $$ = new funcion.default(2, $1, $2, [], false, $6,  @1.first_line, @1.last_column); }
        | void id parentesisa LISTA_DE_PARAMETROS parentesisc llavea INSTRUCCIONES llavec   { $$ = new funcion.default(3, $1, $2, $4, true, $7,  @1.first_line, @1.last_column); }
        | void id parentesisa parentesisc llavea INSTRUCCIONES llavec               { $$ = new funcion.default(3, $1, $2, [], true, $6,  @1.first_line, @1.last_column); }
        ;

LISTA_DE_PARAMETROS : LISTA_DE_PARAMETROS coma TIPO id          { $$ = $1; $$.push(new simbolo.default(6, $3, $4, null)); }
             | TIPO id                           { $$ = new Array(); $$.push(new simbolo.default(6, $1, $2, null)); }
             | TIPO corchetea corchetec id                           { $$ = new Array(); $$.push(new simbolo.default(6, $1, $4, null)); }
             | TIPO corchetea corchetec corchetea corchetec id                { $$ = new Array(); $$.push(new simbolo.default(6, $1, $6, null)); }
             ;

LLAMADA : id parentesisa LISTA_VALORES parentesisc {$$ = new llamada.default($1, $3,@1.first_line, @1.last_column ); }
        | id parentesisa parentesisc           {$$ = new llamada.default($1, [] ,@1.first_line, @1.last_column ); }
        | call id parentesisa LISTA_VALORES parentesisc {$$ = new llamada.default($2, $4,@1.first_line, @1.last_column ); }
        | call id parentesisa parentesisc           {$$ = new llamada.default($2, [] ,@1.first_line, @1.last_column ); }
        ; 

LISTA_VALORES : LISTA_VALORES coma E          { $$ = $1; $$.push($3); }
        | E                             { $$ = new Array(); $$.push($1); }
        ; 

STARTWITH :  run  LLAMADEEE puntocoma    { $$ = new startwith.default($2,@1.first_line, @1.last_column );}
        ;

LLAMADEEE : id parentesisa LISTA_VALORES parentesisc {$$ = new llamada.default($1, $3,@1.first_line, @1.last_column ); }
        | id parentesisa parentesisc           {$$ = new llamada.default($1, [] ,@1.first_line, @1.last_column ); }
        ;   

E : E mas E         { $$ = new aritmetica.default($1, '+', $3, @1.first_line, @1.last_column,false); }
    | E menos E      { $$ = new aritmetica.default($1, '-', $3, @1.first_line, @1.last_column,false); }
    | E potencia E        { $$ = new aritmetica.default($1, '**', $3, @1.first_line, @1.last_column,false); }
    | E multiplicacion E      { $$ = new aritmetica.default($1, '*', $3, @1.first_line, @1.last_column,false); }
    | E division E        { $$ = new aritmetica.default($1, '/', $3, @1.first_line, @1.last_column,false); }
    | E modulo E        { $$ = new aritmetica.default($1, '%', $3, @1.first_line, @1.last_column,false); }
    | E mayorigual E  { $$ = new relacional.default($1, '>=', $3, @1.first_line, @1.last_column,false); }
    | E mayorque E   { $$ = new relacional.default($1, '>', $3, @1.first_line, @1.last_column,false); }
    | E menorigual E { $$ = new relacional.default($1, '<=', $3, @1.first_line, @1.last_column,false); }
    | E menorque E  { $$ = new relacional.default($1, '<', $3, @1.first_line, @1.last_column,false); }
    | E dobleigual E { $$ = new relacional.default($1, '==', $3, @1.first_line, @1.last_column,false); }
    | E diferente E  { $$ = new relacional.default($1, '!=', $3, @1.first_line, @1.last_column,false); }
    | E and E       { $$ = new logica.default($1, '&&', $3, @1.first_line, @1.last_column,false); }
    | E or E       { $$ = new logica.default($1, '||', $3, @1.first_line, @1.last_column,false); }
    | E xor E       { $$ = new logica.default($1, '^', $3, @1.first_line, @1.last_column,false); }
    | not E          { $$ = new logica.default($2, '!', null, @1.first_line, @1.last_column,true); }
    | casteodouble E     { $$ = new logica.default($2, '(double)', null, @1.first_line, @1.last_column,true); }
    | casteoint E  { $$ = new logica.default($2, '(int)', null, @1.first_line, @1.last_column,true); }
    | casteostring parentesisa E parentesisc { $$ = new logica.default($3, '(string)', null, @1.first_line, @1.last_column,true); }
    | casteochar E  { $$ = new logica.default($2, '(char)', null, @1.first_line, @1.last_column,true); } 
    | casteotipo parentesisa E parentesisc { $$ = new logica.default($3, '(tipo)', null, @1.first_line, @1.last_column,true); } 
    | casteotolower parentesisa E parentesisc { $$ = new logica.default($3, '(lower)', null, @1.first_line, @1.last_column,true); } 
    | casteotoupper parentesisa E parentesisc { $$ = new logica.default($3, '(upper)', null, @1.first_line, @1.last_column,true); } 
    | length parentesisa E parentesisc { $$ = new logica.default($3, '(length)', null, @1.first_line, @1.last_column,true); } 
    | chararray parentesisa E parentesisc { $$ = new logica.default($3, '(chararray)', null, @1.first_line, @1.last_column,true); } 
    | round parentesisa E parentesisc { $$ = new logica.default($3, '(round)', null, @1.first_line, @1.last_column,true); } 
    | menos E %prec UMINUS    { $$ = new aritmetica.default($2, 'UNARIO', null, @1.first_line, @1.last_column,true); }
    | parentesisa E parentesisc       { $$ = $2; }
    | decimal           { $$ = new primitivo.default(Number($1), 'DOBLE', @1.first_line, @1.last_column); }
    | entero            { $$ = new primitivo.default(Number($1), 'ENTERO', @1.first_line, @1.last_column); }
    | id                { $$ = new identificador.default($1, @1.first_line, @1.last_column); }
    | id corchetea E corchetec               { $$ = new identificador.default($1, @1.first_line, @1.last_column,$3); }
    | id corchetea E corchetec corchetea E corchetec   { $$ = new identificador.default($1, @1.first_line, @1,$3,$6); }
    | cadena            { $1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, 'CADENA', @1.first_line, @1.last_column); }
    | caracter          { $1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, 'CARACTER', @1.first_line, @1.last_column); }
    | true              { $$ = new primitivo.default(true, 'BOOLEANO', @1.first_line, @1.last_column); }
    | false             { $$ = new primitivo.default(false, 'BOOLEANO', @1.first_line, @1.last_column); }
    | E interrogacion E dospuntos E { $$ = new ternario.default($1, $3, $5, @1.first_line, @1.last_column); }
    | id incremento          { $$ = new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false); }
    | id decremento          { $$ = new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false); }
    | incremento id           { $$ = new aritmetica.default(new identificador.default($2, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false); }
    | decremento id           { $$ = new aritmetica.default(new identificador.default($2, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false); }
    | LLAMADA           { $$ = $1; } 


 
    ;

