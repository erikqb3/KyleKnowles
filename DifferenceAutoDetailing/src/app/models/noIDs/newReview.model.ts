export class newReview {
  constructor(
    public reviewer: string,
    public rating: number,
    public reviewDate: string,
    public reviewText: string,
    public starCount: string,
    public approved: boolean
  ){}
}