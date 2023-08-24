export interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    showContent?: boolean;
    user: string;
  }
  