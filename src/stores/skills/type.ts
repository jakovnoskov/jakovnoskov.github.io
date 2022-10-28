export type manager = {
  id: string,
  name: string,
  type?: string,
}

export type tool = {
  id: string,
  name: string,
  type?: string,
}

export interface Iskill {
  id: string,
  name: string,
  type: string,
  stateManagers: manager[],
  tools: tool[]
}