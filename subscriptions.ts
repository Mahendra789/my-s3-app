/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
    createdAt
    description
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
