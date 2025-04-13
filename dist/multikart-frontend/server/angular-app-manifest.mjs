
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/home/home.routes.ts": [
    {
      "path": "chunk-RU2C3A47.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-6Y226IA5.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-P475PTVK.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/account/account.routes.ts": [
    {
      "path": "chunk-NCLIVZVF.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UZSFSSFZ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-BEIJQLMY.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/blog/blog.routes.ts": [
    {
      "path": "chunk-RHH7RI4U.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-6Y226IA5.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-BEIJQLMY.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/shop/shop.routes.ts": [
    {
      "path": "chunk-OW2ZLJJZ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-P475PTVK.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UZSFSSFZ.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-BEIJQLMY.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-KZIVBWO7.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/page/page.routes.ts": [
    {
      "path": "chunk-FJEQFIJV.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-KZIVBWO7.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 43393, hash: 'f734d94145263a5683e128249f421fab61189c5b9456cfece26cd78083a1428e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38958, hash: 'cba63220df1e45e52234e57c1c1b77019be01e8f806118aa618046330b852b04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OUMD6JI7.css': {size: 1134212, hash: 'GedRmd3OsW4', text: () => import('./assets-chunks/styles-OUMD6JI7_css.mjs').then(m => m.default)}
  },
};
