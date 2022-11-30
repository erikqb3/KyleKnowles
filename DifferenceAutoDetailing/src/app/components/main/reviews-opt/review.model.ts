export class Review {
  constructor(
    public id: string,
    public reviewer: string,
    public rating: number,
    public reviewDate: Date,
    public reviewText: string,
    public starCount: string,
    public approved: boolean
  ){}
}