/// login middleware

export const loginMiddleware = (schema) => async (req, res, next) => {
  try {
    const userData = await schema.parseAsync(req.body);
    req.body = userData;
    next();
  } catch (err) {
    const status = 500;
    const message = "fill login form";
    const extraDetails = err.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };
    console.log("first", error);
    next(error);
  }
};
