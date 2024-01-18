import fs from 'fs';
import path from 'path';

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  return fs.readFileSync(filePath, 'utf-8');
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let content = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      slug,
      content,
    };
  });
}

export function getQuestions(route: string) {
  return getMDXData(path.join(process.cwd(), `content/${route}`));
}

export function writeFileNode() {
  const jsq = getQuestions('javascript').find((q) => q.slug == 'jsq');
  jsq?.content.split('---').map((q, i) => {
    fs.writeFile(`content/javascript/${i + 1}.mdx`, q, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}
