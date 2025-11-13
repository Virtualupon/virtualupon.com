// src/environments/environment.ts
// Development environment configuration

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',  // ⭐ Change port to match your .NET Core API
  
  // Optional: Add other environment-specific configs
  enableDebugMode: true,
  logLevel: 'debug'
};