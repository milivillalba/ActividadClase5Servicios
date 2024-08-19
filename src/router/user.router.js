import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controller/user.controllers.js';
import { userValidator } from '../validations/userValidator.js';
import { validationResult } from 'express-validator';

const router = Router();

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post('/', userValidator, validate, createUser);
router.get('/', getUsers);
router.put('/:id', userValidator, validate, updateUser);
router.delete('/:id', deleteUser);

export default router;
