1. `npm init -y`
2. `npm install -D @tsconfig/node14`
3. `touch tsconfig.json` e adicione:
```JSON
{
  "extends": "@tsconfig/node14/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
4. `npm install -D @types/node`
5. `touch index.ts && touch exercises.ts`
6. **Compilando:** `npx tsc` (gera uma pasta dist, que contem os arquivos JS)
7. **Rodando:** node ./dist/index.js 
