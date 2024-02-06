// /types/env.d.ts
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IS_QA: boolean;
      PORT: number;
      DATABASE_URL: string;
      // Agrega otras variables según tus necesidades
    }
  }
}
