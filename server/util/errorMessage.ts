const Errors = (message: string, statusCode: number) => {
  const error = new Error(message);

  error.statusCode = statusCode;
  throw error;
};

const errorMessage = {
  unauthorized: () => {
    Errors("Not authorized", 401);
  },
  invalid: (message?: string) => {
    Errors(message || "Invalid credentials", 422);
  },
  notFound: (message?: string) => {
    Errors(message || "Not found", 404);
  }
};

export default errorMessage;
