# gatsby-plugin-dns-prefetch

> Add DNS prefetch metas to Gatsby

## Overview

Gatsby plugin to generate metas for DNS prefetch specific domains

![](https://github.com/jmau111/gatsby-plugin-dns-prefetch/raw/main/screen.png)

## Install

```shell
npm i gatsby-plugin-dns-prefetch
```

or

```shell
yarn add gatsby-plugin-dns-prefetch
```

## Usage

Add the plugin to your `gatsby-config.js` and pass the `options`:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-dns-prefetch`,
    options: {
      domains: [
        `https://ext-domain.com`,
        `https://ext-domain2.com`,
        `https://ext-domain3.com`,
      ],
    },
  },
]
```
