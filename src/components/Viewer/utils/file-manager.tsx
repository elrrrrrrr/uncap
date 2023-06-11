export interface Directory {
  path: string;
  type: string;
  files: (File | Directory)[];
}

export interface File {
  path: string;
  type: 'file' | 'directory';
  contentType?: string;
  integrity?: string;
  lastModified?: string;
  size?: number;
  files?: File[];
}
