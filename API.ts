/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Item = {
  __typename: "Item",
  createdAt?: string | null,
  description?: string | null,
  id: string,
  name: string,
  updatedAt?: string | null,
};

export type ModelItemFilterInput = {
  and?: Array< ModelItemFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelItemFilterInput | null,
  or?: Array< ModelItemFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type ModelItemConditionInput = {
  and?: Array< ModelItemConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelItemConditionInput | null,
  or?: Array< ModelItemConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateItemInput = {
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  name: string,
  updatedAt?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type UpdateItemInput = {
  createdAt?: string | null,
  description?: string | null,
  id: string,
  name?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionItemFilterInput = {
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      createdAt?: string | null,
      description?: string | null,
      id: string,
      name: string,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: CreateItemInput,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: DeleteItemInput,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: UpdateItemInput,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    createdAt?: string | null,
    description?: string | null,
    id: string,
    name: string,
    updatedAt?: string | null,
  } | null,
};
