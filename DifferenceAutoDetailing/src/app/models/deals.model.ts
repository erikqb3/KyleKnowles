export class Deals {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public startingPrice: number,
    public details: string[]
  ){}
}