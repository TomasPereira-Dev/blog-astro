// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'blog-personal',
  title: 'blog-personal',
  projectId: '0le9gy6h',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})