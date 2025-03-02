# This is the guide that should help anyone get started.

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Styling](#styling)
- [Documentation](#documentation)

## Introduction
Welcome to the Tanzania AI Community Project! This project is built using Remix, a full stack web framework as a stack for the frontend.

## Project Structure
The project is organized as follows:

```
/frontend
    ├── /app
    │   ├── /api
    │   │   ├── login
    │   │   │   ├── auth-user-schema.ts
    │   │   │   ├── handle-login.ts
    │   │   │   ├── login-form-schema.ts
    │   │   │   ├── login.ts
    │   │   └── upload-file.ts
    │   ├── /components
    │   │   ├── /tip-tap-editor
    │   │   │   ├── editor-small
    │   │   │   │   └── editor-small.tsx
    │   │   │   ├── insert-image-button
    │   │   │   │   ├── insert-image-button.tsx
    │   │   │   │   ├── paste-image-url.tsx
    │   │   │   │   ├── popover-tab.tsx
    │   │   │   │   ├── upload-image-from-local.tsx
    │   │   │   └── insert-url-button
    │   │   │       ├── insert-editor-url-form.tsx
    │   │   │       ├── insert-link-button.tsx
    │   │   │       └── insert-youtube-video-url-button.tsx
    │   │   └── text-size-button.tsx
    │   ├── /hooks
    │   │   ├── useFileInput.ts
    │   │   ├── useGetAbsolutePath.ts
    │   │   ├── useItemSelection.ts
    │   │   ├── useLocationState.ts
    │   │   ├── useMultiImageInput.ts
    │   │   ├── useNavigationState.ts
    │   │   ├── useOfflineCheck.ts
    │   │   ├── useRefreshDictator.ts
    │   │   ├── useRouteModal.ts
    │   │   ├── useScroll.ts
    │   │   ├── useSearchParamsState.ts
    │   │   ├── useSubmitData.ts
    │   │   └── useUploadFile.ts
    │   ├── /providers
    │   │   └── access-control
    │   │       ├── generate-menu-access-control.ts
    │   │       ├── generate-user-access-control-config.ts
    │   │       ├── require-access.ts.server.ts
    │   │       └── use-has-access.ts
    │   ├── /routes
    │   │   ├── /portal
    │   │   │   ├── /posts
    │   │   │   │   ├── signup
    │   │   │   │   │   ├── index
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   └── manage-sigup-form.tsx
    │   │   │   │   │   └── layout.tsx
    │   │   │   ├── /resources
    │   │   │   │   ├── index
    │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   └── layout.tsx
    │   │   │   │   ├── login
    │   │   │   │   │   ├── index
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   └── manage-login-form.tsx
    │   │   │   │   │   └── layout.tsx
    │   │   │   │   ├── signup
    │   │   │   │   │   ├── index
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   └── manage-sigup-form.tsx
    │   │   │   │   │   └── layout.tsx
    │   └── /utils
    │       └── zod-common.ts
    ├── README.md
    ├── package.json
    └── tsconfig.json
```

## Development

Run the dev server:

```shell
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Documentation

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Tailwind CSS docs](https://tailwindcss.com/docs)
- 📖 [Vite docs](https://vitejs.dev/guide/)
