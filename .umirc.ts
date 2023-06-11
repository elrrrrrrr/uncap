import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "*", component: "index" },
  ],
  npmClient: 'yarn',
  esbuildMinifyIIFE: true,
});
