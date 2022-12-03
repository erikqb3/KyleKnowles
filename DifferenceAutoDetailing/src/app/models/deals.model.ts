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