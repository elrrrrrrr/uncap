import Editor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { File } from '../utils/file-manager';
import { useFileContent } from '../utils';

loader.config({ monaco });


export const Code = ({ selectedFile }: { selectedFile: File | undefined }) => {
  if (!selectedFile) return null;

  const { data: code, isLoading } = useFileContent(selectedFile.path);
  let language = selectedFile.path.split('.').pop();

  if (language === 'js' || language === 'jsx') language = 'javascript';
  else if (language === 'ts' || language === 'tsx') language = 'typescript';

  return (
    <div
      style={{
        width: 'calc(100% - 250px)',
        margin: 0,
        fontSize: 16,
      }}
    >
      <Editor
        height="100vh"
        language={language}
        value={isLoading ? 'loading' : code}
        theme="vs-dark"
        options={{ readOnly: true, fontSize: 16 }}
      />
    </div>
  );
};
