<?php

return [
  // Global settings
  '*' => [
    // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
    'useDevServer' => false,
    // The JavaScript entry from the manifest.json to inject on Twig error pages
    'errorEntry' => 'app.js',
    // Manifest file names
    'manifest' => [
      'legacy' => 'manifest-legacy.json',
      'modern' => 'manifest.json',
    ],
    // Public server config
    'server' => [
      'manifestPath' => '/dist/',
      'publicPath' => '/',
    ],
    // webpack-dev-server config
    'devServer' => [
      'manifestPath' => 'http://localhost:8080/',
      'publicPath' => 'http://localhost:8080/',
    ],
    // Local files config
    'localFiles' => [
      'basePath' => '@webroot/',
      'criticalPrefix' => 'dist/criticalcss/',
      'criticalSuffix' => '_critical.min.css',
    ],
  ],
  // Live (production) environment
  'production' => [
    'useDevServer' => false,
  ],
  // Staging (pre-production) environment
  'staging' => [],
  // Local (development) environment
  'dev' => [
    // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
    'useDevServer' => true,
    'manifest' => [
      // WDS only serving up one manifest file, so point to the right one
      'legacy' => 'manifest-legacy.json',
      'modern' => 'manifest-legacy.json',
    ]
  ],
];
