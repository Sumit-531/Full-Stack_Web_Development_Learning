// This middleware factory accepts any number of roles (admin, manager, etc.)
const authorizeRole = (...allowedRoles) => {
  // It returns an actual middleware function
  return (req, res, next) => {
    // Check if the authenticated user's role is included in the allowed roles
    if (!allowedRoles.includes(req.user.role)) {
      // If role not allowed, block access
      return res.status(403).json({
        message: "Access denied",
      });
    }

    // If role is allowed, continue to the next middleware or route handler
    next();
  };
};

export default authorizeRole;
