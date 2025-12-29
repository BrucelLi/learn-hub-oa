import { defineConfig } from 'orval'

export default defineConfig({
  petstore: {
    input: {
      target: 'http://127.0.0.1:8000/api.json'
    },
    output: {
      target: 'src/api/generated/generated.ts',
      httpClient: 'axios',
      mode: 'tags',
      override: {
        mutator: {
          path: './src/api/api-client.ts',
          name: 'axiosInstance'
        }
      }
    },
    hooks: {
      afterAllFilesWrite: ['npx prettier --write']
    }
  }
})
