export type todoType = {
    id: string
    title?: string | null;
    // name?: string
    todo: string 
    isCompleted: boolean;
    updatedAt?: Date | null;
    createdAt?: Date;
  }