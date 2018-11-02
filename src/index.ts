import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios'
import parseSchemas from './parseSchemas'
import { mapApi } from './mapApi'

interface IEntryParams {
  gapiAsJsonSchema: any
}

export interface Context {
  resolvers
  queryResolvers
  graphQLTypes
}

export interface IClient {
  (params : AxiosRequestConfig) : Promise<{data: any}>
}

const defaultClient = (params: AxiosRequestConfig) : AxiosPromise<AxiosResponse> => axios.request(params)

// structure
// api -> resources -> methods

export default ({ gapiAsJsonSchema }: IEntryParams, client : IClient = defaultClient) => {
  const queryResolvers = {}
  const resolvers = {}

  const graphQLTypes = parseSchemas(gapiAsJsonSchema.schemas)

  const context = { resolvers, queryResolvers, graphQLTypes }

  return mapApi(gapiAsJsonSchema, context, client)
}
