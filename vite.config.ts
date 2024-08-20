import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  optimizeDeps: {
    include: ["@ant-design/icons"],
  },

  plugins: [react(), tsconfigPaths()],
  base: "/flower-hub-clone",
});
