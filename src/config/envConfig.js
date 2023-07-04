const envConfig = Object.freeze({
  APP_ENV: import.meta.env.VITE_APP_ENV,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  APP_URL: import.meta.env[`VITE_APP_URL_${import.meta.env.VITE_APP_ENV}`],
  CHAT_URL: import.meta.env[`VITE_CHAT_URL_${import.meta.env.VITE_APP_ENV}`],
  APP_VERSION: import.meta.env.VITE_APP_VERSION
});

export const env = (key, defaultValue = null) => envConfig[key] ?? defaultValue;
export default envConfig;