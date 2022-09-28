# instalacion de TS
- npm install typescript --save-dev
- npx tsc --version   
<br>normalmente typescript no se trabaja como una dependencia global.<br>  
si no como una dependencia de proyecto.<br>
extra: gitignore.io pagina para crear un git ignore

# COMANDOS DE TS
- npx tsc <ARCHIVO> compila de ts a js 
ejemplo npx tsc src/*.ts --outDir dist --target es6
- flags : --outDir(la traduciones la guarda en una carpeta, en el ejemplo de arriba se le llamo dist), --target ( se seleciona la version de ecma script que por defecto es es3 y en el ejemplo selecionamos es6)
- npx tsc --init crea el archivo tsconfig.json
--npx tsc --watch va a estar leyendo mis archivos constantemente y va traspilarlos a js para una actualizacion en vivo
