
%lex
%options case-insensitive

//--> Caracter 
escapechar2      [\'\"\\ntr]
escape2          \\{escapechar2}
aceptacion2      [^\'\\] 
char2         (\'({escape2} | {aceptacion2})\')


%%

//simbolos o palabras reservadas




[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]        {/*ignoramos los comentarios*/}
[/][/].*                                   {/*ignoramos los comentarios*/}                    
","                 {
                        console.log("reconoci token <coma> con lexema: "+yytext);
                        return 'coma';
                    }
"true"                 {
                        console.log("reconoci token <true> con lexema: "+yytext);
                        return 'true';
                    }
"false"                 {
                        console.log("reconoci token <false> con lexema: "+yytext);
                        return 'false';
                    }
"new"                 {
                        console.log("reconoci token <new> con lexema: "+yytext);
                        return 'new';
                    }   
"++"                 {
                        console.log("reconoci token <incremento> con lexema: "+yytext);
                        return 'incremento';
                    }
"--"                 {
                        console.log("reconoci token <decremento> con lexema: "+yytext);
                        return 'decremento';
                    }                 
"+"                 {
                        console.log("reconoci token <suma> con lexema: "+yytext);
                        return 'suma';
                    }
"-"                 {
                        console.log("reconoci token <resta> con lexema: "+yytext);
                        return 'resta';
                    }
"**"                 {
                        console.log("reconoci token <potencia> con lexema: "+yytext);
                        return 'potencia';
                    }
"/"                 {
                        console.log("reconoci token <division> con lexema: "+yytext);
                        return 'division';
                    }
"*"                 {
                        console.log("reconoci token <multiplicacion> con lexema: "+yytext);
                        return 'multiplicacion';
                    }
"%"                 {
                        console.log("reconoci token <modulo> con lexema: "+yytext);
                        return 'modulo';
                    }
"=="                 {
                        console.log("reconoci token <dobleigual> con lexema: "+yytext);
                        return 'dobleigual';
                    }
"!="                 {
                        console.log("reconoci token <diferenciacion> con lexema: "+yytext);
                        return 'diferenciacion';
                    }

"<="                 {
                        console.log("reconoci token <menoroigualque> con lexema: "+yytext);
                        return 'menoroigualque';
                    }
">="                 {
                        console.log("reconoci token <mayoroigualque> con lexema: "+yytext);
                        return 'mayoroigualque';
                    }
">"                 {
                        console.log("reconoci token <mayorque> con lexema: "+yytext);
                        return 'mayorque';
                    }
"<"                 {
                        console.log("reconoci token <menorque> con lexema: "+yytext);
                        return 'menorque';
                    }
"="                 {
                        console.log("reconoci token <igual> con lexema: "+yytext);
                        return 'igual';
                    }                    
"?"                 {
                        console.log("reconoci token <interrogacionc> con lexema: "+yytext);
                        return 'interrogacionc';
                    }
":"                 {
                        console.log("reconoci token <dospuntos> con lexema: "+yytext);
                        return 'dospuntos';
                    }
";"                 {
                        console.log("reconoci token <puntocoma> con lexema: "+yytext);
                        return 'puntocoma';
                    }                    
"||"                 {
                        console.log("reconoci token <or> con lexema: "+yytext);
                        return 'or';
                    }
"&&"                 {
                        console.log("reconoci token <and> con lexema: "+yytext);
                        return 'and';
                    }
"^"                 {
                        console.log("reconoci token <xor> con lexema: "+yytext);
                        return 'xor';
                    }                    
"!"                 {
                        console.log("reconoci token <not> con lexema: "+yytext);
                        return 'not';
                    }
"("                 {
                        console.log("reconoci token <parentesisa> con lexema: "+yytext);
                        return 'parentesisa';
                    }
")"                 {
                        console.log("reconoci token <parentesisc> con lexema: "+yytext);
                        return 'parentesisc';
                    }
"["                 {
                        console.log("reconoci token <corchetea> con lexema: "+yytext);
                        return 'corchetea';
                    }
"]"                 {
                        console.log("reconoci token <corchetec> con lexema: "+yytext);
                        return 'corchetec';
                    }
"{"                 {
                        console.log("reconoci token <llavea> con lexema: "+yytext);
                        return 'llavea';
                    }
"}"                 {
                        console.log("reconoci token <llavec> con lexema: "+yytext);
                        return 'llavec';
                    }
"const"               {
                        console.log("reconoci token <const> con lexema: "+yytext);
                        return 'const';
                    }
"int"               {
                        console.log("reconoci token <int> con lexema: "+yytext);
                        return 'int';
                    }
"double"                 {
                        console.log("reconoci token <double> con lexema: "+yytext);
                        return 'double';
                    }
"char"                 {
                        console.log("reconoci token <char> con lexema: "+yytext);
                        return 'char';
                    }
"string"                 {
                        console.log("reconoci token <string> con lexema: "+yytext);
                        return 'string';
                    }
"boolean"                 {
                        console.log("reconoci token <boolean> con lexema: "+yytext);
                        return 'boolean';
                    }  
"if"                 {
                        console.log("reconoci token <if> con lexema: "+yytext);
                        return 'if';
                    }    
"switch"                 {
                        console.log("reconoci token <switch> con lexema: "+yytext);
                        return 'switch';
                    } 
"case"                 {
                        console.log("reconoci token <case> con lexema: "+yytext);
                        return 'case';
                    }
"default"                 {
                        console.log("reconoci token <default> con lexema: "+yytext);
                        return 'default';
                    }
"else"                 {
                        console.log("reconoci token <else> con lexema: "+yytext);
                        return 'else';
                    }   
"while"                 {
                        console.log("reconoci token <while> con lexema: "+yytext);
                        return 'while';
                    }        
"for"                 {
                        console.log("reconoci token <for> con lexema: "+yytext);
                        return 'for';
                    }      
"do"                 {
                        console.log("reconoci token <do> con lexema: "+yytext);
                        return 'do';
                    }       
"break"                 {
                        console.log("reconoci token <break> con lexema: "+yytext);
                        return 'break';
                    } 
"continue"                 {
                        console.log("reconoci token <continue> con lexema: "+yytext);
                        return 'continue';
                    }       
"return"                 {
                        console.log("reconoci token <return> con lexema: "+yytext);
                        return 'return';
                    } 
"void"                 {
                        console.log("reconoci token <void> con lexema: "+yytext);
                        return 'void';
                    } 
"println"                 {
                        console.log("reconoci token <println> con lexema: "+yytext);
                        return 'println';
                    } 
"print"                 {
                        console.log("reconoci token <print> con lexema: "+yytext);
                        return 'print';
                    }   
"run"                 {
                        console.log("reconoci token <run> con lexema: "+yytext);
                        return 'run';
                    }     
"call"                 {
                        console.log("reconoci token <call> con lexema: "+yytext);
                        return 'call';
                    } 
"typeof"                 {
                        console.log("reconoci token <typeof> con lexema: "+yytext);
                        return 'typeof';
                    } 
[0-9]+("."[0-9]+)\b    {
                        console.log("reconoci token <double2> con lexema: "+yytext);
                        return 'double2';
                    }       
[0-9]+                {
                        console.log("reconoci token <int2> con lexema: "+yytext);
                        return 'int2';
                    }
{char2}             {
                        console.log("reconoci token <char2> con lexema: "+yytext);
                        return 'char2';
                    }
(\"[^\"]*\")          {  
                        console.log("reconoci token <string2> con lexema: "+yytext);
                        return 'string2';
                    }
([a-zA-Z])[a-zA-Z0-9_ñÑ]*                 {
                        console.log("reconoci token <id> con lexema: "+yytext);
                        return 'id';
                    }
[ \r\t]+            {}
\n                  {}
<<EOF>>             return 'EOF'; 
.                   { 
                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + (yylloc.first_column+1)); 
                    }
/lex

//presedencia de operadores
%left 'interrogacionc'
%left 'or'
%left 'and'
%right 'not' 'xor'
%left 'dobleigual' 'diferenciacion'
%left 'menorque' 'menoroigualque' 'mayorque' 'mayoroigualque'
%left 'suma' 'resta'
%left 'multiplicacion' 'division' 'modulo'
%right 'potencia'
%left 'decremento' 'incremento'

%start ini


%%
//lenguaje grammar

ini
	: INSTRUCCIONES EOF {return $1}
;
INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION {$1.push($2); $$ = $1;}	
	| INSTRUCCION 	{$$ = [$1]}		
;

INSTRUCCION
    : DECLARACION_DE_VARIABLES puntocoma
	| DECLARACION_DE_CONSTANTES puntocoma
    | ASIGNACION_DE_VARIABLES puntocoma
    | SENTENCIA_IF 
    | SENTENCIA_IF_SIMPLE
    | SENTENCIA_SWITCH
    | SENTENCIA_FOR
    | SENTENCIA_WHILE
    | SENTENCIA_DO_WHILE   
    | FUNCIONES
    | BLOQUE
    | LLAMADA puntocoma   // { $$ = $1; }
    | return puntocoma       // { $$ = new retorno.default(null); } 
    | return E puntocoma     // { $$ = new retorno.default($2); } 
    | break puntocoma
    | id decremento puntocoma  // { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
    | id incremento puntocoma  // { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
    | continue puntocoma  // { $$ = new continuar.default(); } 
    | PRINT puntocoma
    | PRINTLN puntocoma
    | error     { console.log("Error Sintactico " + yytext + " linea: " + this._$.first_line + " columna: " + this._$.first_column); }
;




DECLARACION_DE_VARIABLES
    : TIPO LISTA_DE_IDS igual E  
    | TIPO LISTA_DE_IDS igual 
; 

DECLARACION_DE_CONSTANTES
    : const DECLARACION_DE_VARIABLES 
; 

TIPO
    : int 	
    | double 	
    | string 
    | char 	
    | boolean 	
;



LISTA_DE_IDS
    : LISTA_DE_IDS coma id // {$1.push($3); $$ = $1;}
    | id // {$$ = [$1]}
;

ASIGNACION_DE_VARIABLES
    :id igual E  // { $$ = new asignacion.default($1, $3, @1.first_line, @1.last_column); }
; 

SENTENCIA_IF  
        : if parentesisa E parentesisc llavea INSTRUCCIONES llavec // { $$ = new Ifs.default($3, $6, [], @1.first_line, @1.last_column); }
        | if parentesisa E parentesisc llavea INSTRUCCIONES llavec else llavea INSTRUCCIONES llavec // { $$ = new Ifs.default($3, $6, $10, @1.first_line, @1.last_column); }
        | if parentesisa E parentesisc llavea INSTRUCCIONES llavec else SENTENCIA_IF // { $$ = new Ifs.default($3, $6, [$9], @1.first_line, @1.last_column); }
;

SENTENCIA_IF_SIMPLE 
        : if parentesisa E parentesisc INSTRUCCION_IF_SIMPLE 
        | if parentesisa E parentesisc INSTRUCCION_IF_SIMPLE else INSTRUCCION_IF_SIMPLE // { $$ = new Ifs.default($3, $6, $10, @1.first_line, @1.last_column); }
        | if parentesisa E parentesisc INSTRUCCION_IF_SIMPLE else SENTENCIA_IF_SIMPLE 
;

INSTRUCCION_IF_SIMPLE
    : DECLARACION_DE_VARIABLES puntocoma
	| DECLARACION_DE_CONSTANTES puntocoma
    | ASIGNACION_DE_VARIABLES puntocoma
    | LLAMADA puntocoma   // { $$ = $1; }
    | return puntocoma       // { $$ = new retorno.default(null); } 
    | return E puntocoma     // { $$ = new retorno.default($2); } 
    | break puntocoma
    | id decremento puntocoma  // { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
    | id incremento puntocoma  // { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
    | continue puntocoma  // { $$ = new continuar.default(); } 
    | PRINT puntocoma
    | PRINTLN puntocoma
    
;

SENTENCIA_SWITCH
            : switch parentesisa E parentesisc llavea LISTA_DE_CASOS llavec          // { $$ = new Switch.default($3, $6, null, @1.first_line, @1.last_column); }
;

LISTA_DE_CASOS
    : LISTA_DE_CASOS CASO      //{ $$ = $1; $$.push($2); }
    | CASO                    // { $$ = new Array(); $$.push($1); }
;

CASO 
    : case E dospuntos INSTRUCCIONES // { $$ = new caso.default($2, $4, @1.first_line, @1.last_column); }
    | default dospuntos INSTRUCCIONES
;

SENTENCIA_FOR 
        : for parentesisa DECLARACION_ASIGNACION_FOR puntocoma E puntocoma ACTUALIZACION_FOR parentesisc llavea INSTRUCCIONES llavec //{ $$ = new For.default($3, $5, $7, $10, @1.first_line, @1.last_column); }
;
// for(i = 0 ; ...)
DECLARACION_ASIGNACION_FOR 
            : TIPO id igual E  // { $$ = new declaracion.default($1, $2, $4,  @1.first_line, @1.last_column);} 
            | id igual E       // { $$ = new asignacion.default($1, $3, @1.first_line, @1.last_column); }
;
//x = 0
// i --
// i++ 
// x++ 
// print(x) -> 1
// i = i + 1 
ACTUALIZACION_FOR 
                : id decremento // { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
                | id incremento  // { $$ = new asignacion.default($1, new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false),@1.first_line, @1.last_column ); }
                | id igual E // { $$ = new asignacion.default($1, $3, @1.first_line, @1.last_column); }
;


SENTENCIA_WHILE
    : while parentesisa E parentesisc llavea INSTRUCCIONES llavec  // { $$ = new While.default($3, $6, @1.first_line, @1.last_column);  }
;

SENTENCIA_DO_WHILE
    : do llavea INSTRUCCIONES llavec while parentesisa E parentesisc puntocoma // { $$ = new DoWhile.default($6, $9, @1.first_line, @1.last_column); }
;

FUNCIONES 
        : TIPO id parentesisa LISTA_DE_PARAMETROS parentesisc llavea INSTRUCCIONES llavec  // { $$ = new funcion.default(2, $1, $2, $4, false, $7,  @1.first_line, @1.last_column); }
        | TIPO id parentesisa  parentesisc llavea INSTRUCCIONES llavec                // { $$ = new funcion.default(2, $1, $2, [], false, $6,  @1.first_line, @1.last_column); }
        | void id parentesisa LISTA_DE_PARAMETROS parentesisc llavea INSTRUCCIONES llavec    // { $$ = new funcion.default(3, $1, $2, $4, true, $7,  @1.first_line, @1.last_column); }
        | void id parentesisa  parentesisc llavea INSTRUCCIONES llavec                // { $$ = new funcion.default(3, $1, $2, [], true, $6,  @1.first_line, @1.last_column); }
;

LISTA_DE_PARAMETROS 
            : LISTA_DE_PARAMETROS coma TIPO id        //  { $$ = $1; $$.push(new simbolo.default(6, $3, $4, null)); }
            | TIPO id                          // { $$ = new Array(); $$.push(new simbolo.default(6, $1, $2, null)); }
;

LLAMADA 
        : call id parentesisa LISTA_DE_VALORES parentesisc  // {$$ = new llamada.default($1, $3,@1.first_line, @1.last_column ); }
        | call id parentesisa  parentesisc           // {$$ = new llamada.default($1, [] ,@1.first_line, @1.last_column ); }
        | id parentesisa LISTA_DE_VALORES parentesisc
        | id parentesisa  parentesisc
; 

LISTA_DE_VALORES 
        : LISTA_DE_VALORES coma E       //   { $$ = $1; $$.push($3); }
        | E                             // { $$ = new Array(); $$.push($1); }
; 

BLOQUE
    :llavea INSTRUCCIONES llavec
;

PRINT
    : print parentesisa E parentesisc //{$$ = new Print($3, @1.first_line, @1.last_column);}
    | print parentesisa parentesisc // {$$ = new Println(null, @1.first_line, @1.last_column);}
;
PRINTLN
        : println parentesisa E parentesisc // {$$ = new Println($3, @1.first_line, @1.last_column);}
        | println parentesisa parentesisc // {$$ = new Println(null, @1.first_line, @1.last_column);}
;


E : E suma E        // { $$ = new aritmetica.default($1, '+', $3, @1.first_line, @1.last_column,false); }
    | E resta E     // { $$ = new aritmetica.default($1, '-', $3, @1.first_line, @1.last_column,false); }
    | E division E       // { $$ = new aritmetica.default($1, '/', $3, @1.first_line, @1.last_column,false); }
    | E potencia E       // { $$ = new aritmetica.default($1, '**', $3, @1.first_line, @1.last_column,false); }
    | E multiplicacion E   // { $$ = new aritmetica.default($1, '*', $3, @1.first_line, @1.last_column,false); }
    | E modulo E        // { $$ = new aritmetica.default($1, '%', $3, @1.first_line, @1.last_column,false); }
    | E mayoroigualque E // { $$ = new relacional.default($1, '>=', $3, @1.first_line, @1.last_column,false); }
    | E mayorque E  // { $$ = new relacional.default($1, '>', $3, @1.first_line, @1.last_column,false); }
    | E menoroigualque E // { $$ = new relacional.default($1, '<=', $3, @1.first_line, @1.last_column,false); }
    | E menorque E // { $$ = new relacional.default($1, '<', $3, @1.first_line, @1.last_column,false); }
    | E dobleigual E // { $$ = new relacional.default($1, '==', $3, @1.first_line, @1.last_column,false); }
    | E diferenciacion E // { $$ = new relacional.default($1, '!=', $3, @1.first_line, @1.last_column,false); }
    | E and E      // { $$ = new logica.default($1, '&&', $3, @1.first_line, @1.last_column,false); }
    | E or E       // { $$ = new logica.default($1, '||', $3, @1.first_line, @1.last_column,false); }
    | not E         // { $$ = new logica.default($2, '!', null, @1.first_line, @1.last_column,true); }
    | parentesisa E parentesisc      // { $$ = $2; }
    | double2          // { $$ = new primitivo.default(Number($1), 'DOBLE', @1.first_line, @1.last_column); }
    | int2           // { $$ = new primitivo.default(Number($1), 'ENTERO', @1.first_line, @1.last_column); }
    | id               // { $$ = new identificador.default($1, @1.first_line, @1.last_column); }
    | string2           // { $1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, 'CADENA', @1.first_line, @1.last_column); }
    | char2         // { $1 = $1.slice(1, $1.length-1); $$ = new primitivo.default($1, 'CARACTER', @1.first_line, @1.last_column); }
    | true              // { $$ = new primitivo.default(true, 'BOOLEANO', @1.first_line, @1.last_column); }
    | false             // { $$ = new primitivo.default(false, 'BOOLEANO', @1.first_line, @1.last_column); }
    | id incremento        // { $$ = new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '+', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false); }
    | id decremento        // { $$ = new aritmetica.default(new identificador.default($1, @1.first_line, @1.last_column), '-', new primitivo.default(1, 'ENTERO', @1.first_line, @1.last_column), @1.first_line, @1.last_column, false); }
    | LLAMADA         // { $$ = $1; } 
    | typeof parentesisa E parentesisc // {$$ = new tipoof.default($3, @1.first_line, @1.last_column ); }
;


