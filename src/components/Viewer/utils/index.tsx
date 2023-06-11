import useSwr from 'swr';
import useInfo from '@/hooks/useInfo';
import { File, Directory } from './file-manager';

const REGISTRY = 'https://registry.npmmirror.com';

function sortFiles(files: (File | Directory)[]) {
  files.sort((a, b) => {
    if (a.type === 'directory' && b.type !== 'directory') {
      return -1;
    }
    if (a.type !== 'directory' && b.type === 'directory') {
      return 1;
    }
    return a.path > b.path ? 1 : -1;
  });

  files.forEach(item => {
    if (item.files) {
      sortFiles(item.files);
    }
  });
}

export const useDirs = () => {
  const info = useInfo();
  return useSwr(`dirs: ${info.fullname}_${info.spec}`, async () => {
    return fetch(`${REGISTRY}/${info.fullname}/${info.spec}/files?meta`)
      .then((res) => res.json())
      .then(res => {
        sortFiles(res.files);
        return Promise.resolve(res);
      })
  });
}

export const useFileContent = (path: string) => {
  const info = useInfo();
  return useSwr(`file: ${info.fullname}_${info.spec}_${path}`, async () => {
    return fetch(`${REGISTRY}/${info.fullname}/${info.spec}/files${path}`).then((res) => res.text());
  });
};
