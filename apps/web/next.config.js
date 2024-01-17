// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs')
const removeImports = require('next-remove-imports')()

module.exports = {
  reactStrictMode: true,
  transpilePackages: [],
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL
  }
}

module.exports = withSentryConfig(
  removeImports(module.exports)
)
