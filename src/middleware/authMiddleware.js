export const checkRole = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access forbidden' });
      }
      next();
    };
  };
  
  // Uso en rutas
  router.post('/productos', checkRole(['admin', 'vendedor']), createProduct);
  