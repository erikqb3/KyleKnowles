export class Photo {
  constructor(
    public id: string,
    public page: string,
    public category: string,
    public type: string,
    public alt: string,
    public path: string
  ){}
}