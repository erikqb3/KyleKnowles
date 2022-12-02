export class Review {
  constructor(
    public id: string,
    public reviewer: string,
    public rating: number,
    public reviewDate: string,
    public reviewText: string,
    public starCount: string,
  ){}
}