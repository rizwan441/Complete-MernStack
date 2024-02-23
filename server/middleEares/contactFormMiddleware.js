export const clientFormMiddleware = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (er) {
    const status = 400;
    const message = "fill the form";
    const extraDetails = er.errors[0].message;

    const error = {
      status,
      message,
      extraDetails,
    };
    console.log("second", er);
    next(error);
  }
};
