module.exports = {
    chainWebpack: config => {
        config.module
            .rule('graphql')
            .test(/\.graphql$/)
            .use('graphql-tag/loader')
            .loader('graphql-tag/loader')
            .end();
    },
    devServer: {
        // open: process.platform === 'darwin',
        host: '0.0.0.0',
        // port: 8085, // CHANGE YOUR PORT HERE!
        https: true,
        // hotOnly: false,
      },
}