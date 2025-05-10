import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dst',

  projectId: 'wh4xkhq2',
  dataset: 'dts',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
