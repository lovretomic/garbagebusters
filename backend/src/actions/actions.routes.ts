import express from 'express';
import {getActions, getActionById, deleteAction
} from './actions.service';
import {createAction} from './actions.controller'

const router = express.Router();

router.get('/', getActions);
router.get('/:id', getActionById);
router.post('/', createAction);
router.delete('/:id', deleteAction);

export default router;