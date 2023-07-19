// import  sanityClient  from '@sanity/client'
import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'i6udtdu0',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: 'skjontuWNm1H8bkWaHjOTDlwSLMIguQ170WAAXxhsJYi5TgJ5c5wH8xEUxc7XMPQ68YG1JNlpdXb3KrHRXDYCg3RZ40xEv3MXxukAGAxgD0FtYLEktctE7WtTuFnnha3lghsgppmxRqNhMVDKaBaS1uz4uCcugwiMLSpgBIeQi7LMxFG16KV'
  })


// export const client = createClient({
//   projectId: 'your-project-id',
//   dataset: 'your-dataset-name',
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
// })

