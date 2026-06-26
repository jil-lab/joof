/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRAPI_URL: string;
  readonly VITE_PAYSTACK_LINK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
