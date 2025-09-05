// amplify/data/resource.ts
import { defineData } from '@aws-amplify/backend';

export const data = defineData({
  name: 'appData',
  schema: `
    type Item 
      @model 
      @auth(rules: [
        { allow: private, operations: [create, read, update, delete] }
      ]) {
      id: ID! @primaryKey
      name: String!
      description: String
      createdAt: AWSDateTime
      updatedAt: AWSDateTime
    }
  `,
});
