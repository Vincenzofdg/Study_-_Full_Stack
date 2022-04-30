import IConnection from "./IConnection";

export default class MockedConn implements IConnection {
  execute(query: string, values: any): Promise<any> {
    console.log(query, values)
    return Promise.resolve()
  }

}