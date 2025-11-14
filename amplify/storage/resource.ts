import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'meeiStorage',
  access: (allow) => ({
    'audio-files/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'canvas-exports/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'generated-content/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});
