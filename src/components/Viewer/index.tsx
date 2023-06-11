import { useState } from "react";
import { Sidebar } from './components/sidebar';
import { useDirs } from "./utils";
import { Code } from "./editor/code";
import { File } from "./utils/file-manager";
import { FileTree } from "./components/file-tree";

const Viewer = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const { data: rootDir, isLoading } = useDirs();

  const onSelect = (file: File) => setSelectedFile(file);

  if (isLoading) {
    return <>Fetching dirs</>
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar>
          <FileTree
            rootDir={rootDir}
            selectedFile={selectedFile}
            onSelect={onSelect}
          />
        </Sidebar>
        <Code selectedFile={selectedFile} />
      </div>
    </div>
  );
};

export default Viewer;
