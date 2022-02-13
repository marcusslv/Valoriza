class ValidationError extends Error {
  constructor(messsage: string) {
    super(messsage);
    this.name = "ValidationError";
  }
}

export { ValidationError };
