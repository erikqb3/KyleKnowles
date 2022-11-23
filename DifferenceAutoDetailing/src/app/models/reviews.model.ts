export class Review {
  constructor(
    public id:number,
    public name: string,
    public rating: number,
    public descript: string,
    public approved: boolean
  ){}
}