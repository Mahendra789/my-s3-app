/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from './API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createItem = /* GraphQL */ `mutation CreateItem(
  $condition: ModelItemConditionInput
  $input: CreateItemInput!
) {
  createItem(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<APITypes.CreateItemMutationVariables, APITypes.CreateItemMutation>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $condition: ModelItemConditionInput
  $input: DeleteItemInput!
) {
  deleteItem(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<APITypes.DeleteItemMutationVariables, APITypes.DeleteItemMutation>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $condition: ModelItemConditionInput
  $input: UpdateItemInput!
) {
  updateItem(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<APITypes.UpdateItemMutationVariables, APITypes.UpdateItemMutation>;

export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedMutation<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;

export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      description
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedMutation<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
