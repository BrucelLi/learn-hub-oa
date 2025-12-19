import { defineConfig } from 'orval'

import { axiosInstance } from '@/api/api-client.ts'

export default defineConfig({
  api: {
    input: './openai.json',
    output: {
      target: 'src/api/generated/generated.ts',
      client: 'react-query',
      httpClient: 'axios',
      mode: 'tags',
      hooks: {
        enabled: true
      },
      override: {
        axios: axiosInstance
      }
    }
  }
})
