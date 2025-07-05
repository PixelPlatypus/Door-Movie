module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        'env': ['APPWRITE_ENDPOINT', 'APPWRITE_PROJECT_ID', 'APPWRITE_PLATFORM', 'APPWRITE_DATABASE_ID', 'APPWRITE_COLLECTION_ID'],
        'moduleName': '@env',
        'path': '.env',
        'safe': false,
        'allowUndefined': true,
      }],
      'react-native-reanimated/plugin',
    ],
  };
};