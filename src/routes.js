import { Router } from 'express';
import swaggerSpec from './utils/swagger';
import todoController from './controllers/todos';
import loginController from './controllers/login';
import usersController from './controllers/users';
import registerController from './controllers/register';
// import { ensureToken } from './middlewares/ensureToken';

/**
 * Contains all API routes for the application.
 */
let router = Router();

/**
 * GET /api/swagger.json
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * @swagger
 * definitions:
 *   App:
 *     title: App
 *     type: object
 *     properties:
 *       app:
 *         type: string
 *       apiVersion:
 *         type: string
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get API version
 *     description: App version
 *     produces:
 *       - application/json
 *     tags:
 *       - Base
 *     responses:
 *       200:
 *         description: Application and API version
 *         schema:
 *           title: Users
 *           type: object
 *           $ref: '#/definitions/App'
 */

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

// task to be validated in token
router.use('/todos', todoController);
router.use('/users', usersController);
router.use('/logout', loginController);

// without validation
router.use('/login', loginController);
router.use('/register', registerController);

export default router;
