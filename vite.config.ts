import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '', // Substitua 'nome-do-repo' pelo nome do seu repositório
});