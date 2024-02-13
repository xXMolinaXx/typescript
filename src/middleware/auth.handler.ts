export const myLogger = (req: any, res: any, next: any) => {
  console.log("LOGGED");
  next();
  // res.json({ sucess: false, message: "error" });
};
export function checkRoles(...roles: any) {
  return (req: any, res: any, next: any) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      res.json({ success: false, message: "No estas autorizado" })
    }
  };
}
