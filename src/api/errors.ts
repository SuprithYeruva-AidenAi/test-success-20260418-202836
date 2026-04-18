export class ApiError extends Error {
  constructor(
    public productCode: string,
    public status: number,
    public url: string,
    message: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}
