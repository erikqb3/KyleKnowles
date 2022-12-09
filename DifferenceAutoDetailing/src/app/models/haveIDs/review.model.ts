export class Review {
  constructor(
    public Id: string,
    public reviewer: string,
    public rating: number,
    public reviewDate: string,
    public reviewText: string,
    public starCount: string,
    public approved: boolean
  ){}
}