module.exports = {
  devServer: {
    proxy: {
      "/front-end": {
        target: "https://www.digikala.com",
        changeOrigin: true,
      },
    },
  },
};
