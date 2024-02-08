export const myLogger = (req: any, res: any, next: any) => {
  console.log("LOGGED");
  next();
  // res.json({ sucess: false, message: "error" });
};
