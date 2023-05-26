# MDX Remote Example

This example shows how a simple blog might be built using the [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) library, which allows MDX content to be loaded as data. The MDX content is loaded from a local folder, but it could be loaded from a database or anywhere else.

The example also showcases [next-remote-watch](https://github.com/hashicorp/next-remote-watch), a library that allows Next.js to watch files that are not part of the source code, such as MDX files, and trigger reloads on change.

Since `next-remote-watch` uses undocumented Next.js APIs, it doesn't replace the default `dev` script for this example. To use it, run `npm run dev:watch` or `yarn dev:watch`.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote&project-name=with-mdx-remote&repository-name=with-mdx-remote)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-mdx-remote with-mdx-remote-app
```

```bash
yarn create next-app --example with-mdx-remote with-mdx-remote-app
```

```bash
pnpm create next-app --example with-mdx-remote with-mdx-remote-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
