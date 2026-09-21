import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/components/**/*.ts'],
      exclude: ['**/*.spec.ts'],
      reporter: ['text', 'lcov']
    }
  }
});
