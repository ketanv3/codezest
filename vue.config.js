module.exports = {
  pluginOptions: {
    s3Deploy: {
      region: process.env.AWS_DEFAULT_REGION,
      bucket: process.env.S3_BUCKET_NAME,

      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',

      pwa: true,
      pwaFiles: 'index.html,service-worker.js,manifest.json',

      enableCloudfront: true,
      cloudfrontId: process.env.CLOUDFRONT_DIST_ID,
      cloudfrontMatchers: '/index.html,/service-worker.js,/manifest.json',

      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 10
    }
  }
}
