# sveltekit boilerplate by jehwanyoo + SMUI

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

This boilerplate uses SMUI. Please refer to the Apache License. [`Apache License 2.0`](https://github.com/hperrin/svelte-material-ui/blob/master/LICENSE).

## Stack

-   Sveltekit + TS + eslint + prettier + playwright + husky + material UI (dark mode support)

NOTE: SUMI Button component was only installed. Please refer to [the official documentation](https://sveltematerialui.com/SVELTEKIT.md) to install the necessary components.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Husky

```shell
npm run install-husky
```

format(prettier) -> check(svelte-check) -> test(playwright) -> commit(git)

## Compile SMUI scss

```shell
npm run compile-smui
```

Please refer to [the documentation](https://sveltematerialui.com/SVELTEKIT.md) for more information.
