import { cp, mkdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'clock.js', 'about', 'projects', '.nojekyll']) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}
console.log('Static site ready in dist/');
