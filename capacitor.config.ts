import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.slayerz.app',
  appName: 'SlayerZ',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0F0F0F'
    },
    App: {
      androidTheme: 'dark'
    }
  }
};

export default config;
