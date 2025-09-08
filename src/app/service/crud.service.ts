// src/app/services/crud.service.ts
import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { createItem, updateItem, deleteItem, getItem, listItems } from '../../../mutations';
import { onCreateItem, onUpdateItem, onDeleteItem } from '../../../subscriptions';

const client = generateClient();

@Injectable({ providedIn: 'root' })
export class CrudService {
  async create(name: string, description?: string) {
    return client.graphql({
      query: createItem,
      variables: { input: { name, description } },
    });
  }

  async update(id: string, name?: string, description?: string) {
    return client.graphql({
      query: updateItem,
      variables: { input: { id, name, description } },
    });
  }

  async delete(id: string) {
    return client.graphql({
      query: deleteItem,
      variables: { input: { id } },
    });
  }

  async get(id: string) {
    return client.graphql({
      query: getItem,
      variables: { id },
    });
  }

  async list() {
    return client.graphql({
      query: listItems,
    });
  }

  // Subscription methods for real-time updates
  subscribeToCreate() {
    return client.graphql({
      query: onCreateItem,
    });
  }

  subscribeToUpdate() {
    return client.graphql({
      query: onUpdateItem,
    });
  }

  subscribeToDelete() {
    return client.graphql({
      query: onDeleteItem,
    });
  }

  // Lambda-based operations
  async processItem(input: any) {
    return client.graphql({
      query: `
        query ProcessItem($input: LambdaInput!) {
          processItem(input: $input) {
            success
            data
            message
            error
          }
        }
      `,
      variables: { input },
    });
  }
}
