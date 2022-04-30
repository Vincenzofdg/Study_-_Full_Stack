export default interface IConnection {
  execute(query: string, values: any): Promise<any>
}