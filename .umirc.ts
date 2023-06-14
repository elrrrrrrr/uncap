import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "*", component: "index" },
  ],
  npmClient: 'yarn',
  esbuildMinifyIIFE: true,
  define: {
    'process.env.NPM_REGISTRY': process.env.NPM_REGISTRY || 'https://registry.npmmirror.com',
  },
});
