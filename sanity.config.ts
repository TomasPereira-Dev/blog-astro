// sanity.config.ts
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes/';

export default defineConfig({
  name: 'blog-personal',
  title: 'blog-personal',
  projectId: '0le9gy6h',
  dataset: 'production',
  plugins: [structureTool()],
  schema,
})