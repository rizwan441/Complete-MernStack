export const registerMiddleware = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;

    next();
  } catch (err) {
    const status = 400;
    const message = "fill the message";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };
    console.log(error);

    // const message = err.errors[0].message;
    // res.status(400).json({ messege });
    // console.log(messege);
    next(error);
  }
};

// module.exports = registerMiddleware;
