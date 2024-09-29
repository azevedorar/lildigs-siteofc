import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/lildigs-siteofc/', // Substitua pelo nome correto do seu repositório
  plugins: [react()],
});