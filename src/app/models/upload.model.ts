export class Upload {
    $key: string;
    file: File;
    url: string;
    progress: number;
    createdOn: Date = new Date();
    title: string;
    description: string;
    gallery: string;
    constructor(file: File) {
      this.file = file;
    }
  }