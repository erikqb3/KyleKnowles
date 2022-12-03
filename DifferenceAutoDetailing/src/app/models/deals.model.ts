export class Deals {
  constructor(
    public DealsOpt: {
      "deal":string,
      "type":string,
      "price":number
    },
    public FeaturesOpt: string[]
  ){}
}
// export class Deals {
//   constructor(
//     public deal: string,
//     public type: string,
//     public price: number
//   ){}
// }