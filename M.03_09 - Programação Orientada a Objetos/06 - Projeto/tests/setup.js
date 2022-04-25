const ts = require('typescript');
const path = require('path');
const cp = require('child_process');
const fs = require('fs');

const FILES_FOLDER = path.join(__dirname, 'sources');

const PERMANENT_JS_FILES = [
  './jest.config.js',
  './tests/setup.js',
  './node_modules/*',
  './tests/testSequencer.js'
];

const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

afterEach(() => {
  const findPath = process.platform === 'win32' ? '"C:\\Program Files\\Git\\usr\\bin\\find.exe"' : 'find';
  let execString = `${findPath} . -type f -iname '*.js'`;
  PERMANENT_JS_FILES.forEach((file) => { execString += ` -not -path '${file}'`; });
  execString += ' -delete';
  cp.execSync(execString);
});

expect.extend({
  toCompile(fileName, emit = true) {
    const filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], { maxNodeModuleJsDepth: 1, target: ts.ScriptTarget.ES2016, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeJs });
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const errorDiagnostic = diagnostics.find(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
    );

    if (errorDiagnostic) return {
      pass: false,
      message: () => `Expected ${fileName}.ts to compile successfully`,
    };

    if (emit) program.emit();

    return {
      pass: true,
      message: () => `Expected ${fileName}.ts to compile successfully`,
    };
  },
  notToCompile(fileName) {
    const filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], { maxNodeModuleJsDepth: 1, target: ts.ScriptTarget.ES2016, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeJs });
    const diagnostics = ts.getPreEmitDiagnostics(program);

    const errorDiagnostic = diagnostics.find(
      (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
    );

    if (!errorDiagnostic) return {
      pass: false,
      message: () => `Expected ${fileName}.ts to generate compile errors`,
    };

    if (errorDiagnostic.code === 6053) return {
      pass: false,
      message: () => `${filePath} is not a valid file. Your test is probably not testing the correct file.`,
    };

    return {
      pass: true,
      message: () => `Expected ${fileName}.ts to generate compile errors`,
    };
  },
  toCompileAndBeEqualTo(fileName, expected) {
    let filePath = path.join(FILES_FOLDER, `${fileName}.ts`);

    const program = ts.createProgram([filePath], { maxNodeModuleJsDepth: 1, target: ts.ScriptTarget.ES2016, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.NodeJs });

    program.emit();
    filePath = filePath.replace('.ts', '.js');

    const jsString = fs.readFileSync(filePath) + ' ; result();';
    const result = eval(replaceAll(jsString, '../../src', '../src'));

    const pass = typeof result === 'object' ? JSON.stringify(result) == JSON.stringify(expected) : result === expected;

    return pass ? {
      pass: true,
      message: () => `Expected result of ${fileName}.js to be equal to ${expected}`,
    } : {
      pass: false,
      message: () => `Expected result of ${fileName}.js to be equal to ${expected} but got ${typeof result === 'object' ? JSON.stringify(result) : result}`,
    };
  },
});

