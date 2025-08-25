import fs from 'fs';
import path from 'path';

function writeDirPackage(dir, obj) {
  const full = path.join(process.cwd(), dir);
  fs.mkdirSync(full, { recursive: true });
  fs.writeFileSync(path.join(full, 'package.json'), JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

writeDirPackage('dist/esm', { type: 'module' });
writeDirPackage('dist/cjs', { type: 'commonjs' });
console.log('Created dist/esm/package.json and dist/cjs/package.json');