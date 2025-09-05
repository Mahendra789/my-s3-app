// amplify/storage/resource.ts
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'appFiles',
  access: (allow) => ({
    // Anyone can read files in public/, but only signed-in users will upload in our example.
    'public/*': [allow.guest.to(['read']), allow.authenticated.to(['read'])],

    // Each signed-in user can fully manage their own files under protected/<identityId>/
    'protected/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete']),
      // (Optional) other authenticated users can read protected files if you want:
      allow.authenticated.to(['read']),
    ],

    // Private strictly for the owner under private/<identityId>/
    'private/{entity_id}/*': [allow.entity('identity').to(['read', 'write', 'delete'])],
  }),
});
