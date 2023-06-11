export default () => ({
  port: parseInt(process.env.PORT) || 4000,
  isCorsEnabled: process.env.IS_CORS_ENABLED,
});
