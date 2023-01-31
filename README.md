This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), it uses rickandmortyapi.com to fetch data and render. 

Is a project to test the new app folder structure of NextJs, but is failing with the tests. 
The problem is that ServerComponents return a promise, and typescript TSX definition of a component doesn't expect a promise to be returned. 

waiting this issues to be fixed in Microsoft/Typescript to move forward to check the app layouts. 
https://github.com/vercel/next.js/issues/43537
https://github.com/microsoft/TypeScript/pull/51328
 

So moved stuffed for now to the old pages/ structure. 

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000/ricky](http://localhost:3000/ricky) with your browser to see the result of the page/ricky. Not rendering now the new app folder. But there is an example of a page with the new app layout. It has problems with tests, so using the old page/ structure.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
