
%lex
%ignorecase



comentario = ("//" [^"\n"]+)
comentariolineas = "/*"[^"!>"]*"*/"
int2 = [0-9]+
double2 = [0-9]+("."[0-9]+)?\b 
char2 = "'"[^']"'"
string2 = \"[^\"]*\"
caracterEspecial = ([\"][^\n\"]+[\"][\"])
identificador = ([a-zA-Z])[a-zA-Z0-9_ñÑ]*

%%

//simbolos o palabras reservadas




","                 {
                        console.log("reconoci token <coma> con lexema: "+yytext);
                        return 'coma';
                    }
"true"                 {
                        console.log("reconoci token <boolean2> con lexema: "+yytext);
                        return 'boolean2';
                    }
"false"                 {
                        console.log("reconoci token <boolean2> con lexema: "+yytext);
                        return 'boolean2';
                    }
"new"                 {
                        console.log("reconoci token <new> con lexema: "+yytext);
                        return 'new';
                    }                    
"+"                 {
                        console.log("reconoci token <suma> con lexema: "+yytext);
                        return 'suma';
                    }
"-"                 {
                        console.log("reconoci token <resta> con lexema: "+yytext);
                        return 'resta';
                    }
"*"                 {
                        console.log("reconoci token <multiplicacion> con lexema: "+yytext);
                        return 'multiplicacion';
                    }
"/"                 {
                        console.log("reconoci token <division> con lexema: "+yytext);
                        return 'division';
                    }
"^"                 {
                        console.log("reconoci token <potencia> con lexema: "+yytext);
                        return 'potencia';
                    }
"%"                 {
                        console.log("reconoci token <modulo> con lexema: "+yytext);
                        return 'modulo';
                    }
"=="                 {
                        console.log("reconoci token <operador> con lexema: "+yytext);
                        return 'operador';
                    }
"!="                 {
                        console.log("reconoci token <operador> con lexema: "+yytext);
                        return 'operador';
                    }

"<="                 {
                        console.log("reconoci token <operador> con lexema: "+yytext);
                        return 'operador';
                    }
">="                 {
                        console.log("reconoci token <operador> con lexema: "+yytext);
                        return 'operador';
                    }
">"                 {
                        console.log("reconoci token <operador> con lexema: "+yytext);
                        return 'operador';
                    }
"<"                 {
                        console.log("reconoci token <operador> con lexema: "+yytext);
                        return 'operador';
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
         

comentario                 {
                        console.log("reconoci token <comentario> con lexema: "+yytext);
                        return 'comentario';
                    }
comentariolineas                 {
                        console.log("reconoci token <comentariolineas> con lexema: "+yytext);
                        return 'comentariolineas';
                    }
[0-9]+                {
                        console.log("reconoci token <int2> con lexema: "+yytext);
                        return 'int2';
                    }
[0-9]+("."[0-9]+)?\b                 {
                        console.log("reconoci token <double2> con lexema: "+yytext);
                        return 'double2';
                    }
char2                 {
                        console.log("reconoci token <char2> con lexema: "+yytext);
                        return 'char2';
                    }
(\"[^\"]*\")          {  
                        console.log("reconoci token <string2> con lexema: "+yytext);
                        return 'string2';
                    }
caracterEspecial                 {
                        console.log("reconoci token <caracterEspecial> con lexema: "+yytext);
                        return 'caracterEspecial';
                    }
([a-zA-Z])[a-zA-Z0-9_ñÑ]*                 {
                        console.log("reconoci token <identificador> con lexema: "+yytext);
                        return 'identificador';
                    }

[ \r\t]+            {}
\n                  {}
<<EOF>>             return 'EOF'; 
.                   { 
                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + (yylloc.first_column+1)); 
                    }
/lex


%start ini

%%

ini
	: INSTRUCCIONES EOF {return $1}
;
INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION {$1.push($2); $$ = $1;}	
	| INSTRUCCION 	{$$ = [$1]}		
;

INSTRUCCION
	: INCREMENTO      
    | DECREMENTO 
    | ASIGNACION 
    | DECLARACION     
    | CASTEOSE
    | DECLARACIONSVECTORES
    | ACCESOVECTORES
    | IF
    | SWITCH
    | WHILE  
    | FOR 
    | DOWHILE
    | BREAK
    | CONTINUE
    | RETURN
    | METODOS
    | LLAMADAS
    | PRINT {$$ = $1}
    | PRINTLN
    | RUN
;
RUN 
    : run LLAMADAS
;

PRINTLN
    : println parentesisa EXPRESIONESPRINT parentesisc puntocoma
;
PRINT
    : print parentesisa EXPRESIONESPRINT parentesisc puntocoma {$$= new Print($3, @1.first_line, @1.first_column)}
;
EXPRESIONESPRINT
    : LLAMADAS 
    | LLAMADAS EXPRESIONESPRINT
    | suma
    | string2 {$$= new Literal($1,Type.STRING,  @1.first_line, @1.first_column)}
    | identificador
    | identificador EXPRESIONESPRINT
    | suma EXPRESIONESPRINT
    | string2 EXPRESIONESPRINT
    
;

LLAMADAS
    : identificador parentesisa PARAMETROSLLAMADA parentesisc puntocoma
    | identificador parentesisa parentesisc puntocoma
    | identificador parentesisa PARAMETROSLLAMADA parentesisc 
    | identificador parentesisa parentesisc 
;
PARAMETROSLLAMADA 
    : identificador 
    | EXPRESION 
    | identificador coma PARAMETROSLLAMADA
    | EXPRESION coma PARAMETROSLLAMADA
;

METODOS
    : identificador parentesisa parentesisc llavea INSTRUCCIONES llavec
    | identificador parentesisa parentesisc dospuntos void llavea INSTRUCCIONES llavec
    | identificador parentesisa PARAMETROS parentesisc llavea INSTRUCCIONES llavec
    | identificador parentesisa PARAMETROS parentesisc dospuntos void llavea INSTRUCCIONES llavec

;
PARAMETROS
    : TIPO identificador
    | TIPO identificador coma PARAMETROS
;


BREAK
    : break puntocoma
; 
CONTINUE
    : continue puntocoma
;  
RETURN
    : return puntocoma
    | return EXPRESION puntocoma
    | return identificador puntocoma
; 

DOWHILE
    : do llavea INSTRUCCIONES llavec while parentesisa EXPRESIONIF parentesisc puntocoma
; 


FOR
    : for parentesisa DECLARACION EXPRESIONIF puntocoma ACTUALIZACION parentesisc llavea INSTRUCCIONES llavec
    | for parentesisa ASIGNACION EXPRESIONIF puntocoma ACTUALIZACION parentesisc llavea INSTRUCCIONES llavec
;    
ACTUALIZACION
    : identificador suma suma
    | identificador resta resta
    | identificador igual identificador resta int2
    | identificador igual identificador suma int2
;
WHILE
    : while parentesisa EXPRESIONIF parentesisc llavea INSTRUCCIONES llavec
;    

IF
    : if parentesisa EXPRESIONIF parentesisc llavea INSTRUCCIONES llavec
    | if parentesisa EXPRESIONIF parentesisc llavea INSTRUCCIONES llavec else ELSE
    | if parentesisa EXPRESIONIF parentesisc llavea INSTRUCCIONES llavec else IF
;

EXPRESIONIF
    : identificador operador EXPRESION 
    | identificador operador EXPRESION and EXPRESIONIF 
    | identificador operador EXPRESION or EXPRESIONIF 
;

ELSE
    : llavea INSTRUCCIONES llavec
;



SWITCH
    : switch parentesisa identificador parentesisc llavea CASESLIST DEFAULT llavec
    | switch parentesisa identificador parentesisc llavea CASESLIST llavec
    | switch parentesisa identificador parentesisc llavea DEFAULT llavec
;
CASESLIST
    : case EXPRESION dospuntos INSTRUCCIONES CASESLIST
    | case EXPRESION dospuntos INSTRUCCIONES
;
DEFAULT
    : default dospuntos INSTRUCCIONES
;


DECLARACIONESVECTORES 
    : DECLARACION1
;

DECLARACIOON1
    : TIPO identificador corchetea corchetec igual new TIPO CORCHETESEXP puntocoma
;
CORCHETES
    : corchetea corchetec
    | corchetea corchetec CORCHETES 
;
CORCHETESEXP
    : corchetea EXPRESION corchetec 
    | corchetea EXPRESION corchetec CORCHETESEXP 
;

DECLARACIOON2
    : TIPO identificador CORCHETES igual corchetea LISTAVALORES corchetec puntocoma
    | TIPO identificador CORCHETES igual corchetea LISTAVALORES1 corchetec puntocoma
;
LISTAVALORES1
    : EXPRESION
    | EXPRESION LISTAVALORES1
;
LISTAVALORES
    : corchetea LISTAVALORES2 coma LISTAVALORES
    | corchetea LISTAVALORES2
;
LISTAVALORES2
    : EXPRESION coma LISTAVALORES2 
    | EXPRESION corchetec
;

ACCESOVECTORES
    : identificador CORCHETESEXP
;

INCREMENTO 
    : identificador suma suma puntocoma
;
DECREMENTO 
    : identificador resta resta puntocoma
;
CASTEOS
    : parentesisa TIPO parentesisc EXPRESION puntocoma
;  
ASIGNACION
    : identificador igual EXPRESION puntocoma
;  
DECLARACION
    : TIPO IDENTIFICADORES puntocoma
;    
IDENTIFICADORES
    : identificador 
    | identificador coma IDENTIFICADORES
    | identificador igual EXPRESION
;

EXPRESION
    : int2
    | string2
    | double2
    | char2
    | boolean2
;    
TIPO
    : int 	
    | double 	
    | boolean 	
    | char 	
    | string 
;
