const db = require('../models');

module.exports = {
    create: (req, res) => {
        const newTrans = {
            userId: req.user.id,
            description: req.body.description || null,
            amount: req.body.amount || null,
            categoryId: req.body.categoryId || null,
            date: req.body.date || null,
            isReconciled: req.body.isReconciled || null,
            isPaid: req.body.isPaid || null,
            isRecurring: req.body.isRecurring || null,
            imageUrl: req.body.imageUrl || null,
            dueDate: req.body.dueDate || null,
            hasReceipt: req.body.hasReceipt || null
        }
        db.Transaction.create(newTrans).then(result => res.json(result));
    },

    findAll: (req, res) => {
        db.Transaction.findAll({
            where: {
                id: req.user.id
            }
        }).then(results => res.json(results));
    },

    update: (req, res) => {
        if (!req.body.id) return res.status(400);
        const updatedTrans = {
            userId: req.user.id,
            description: req.body.description || null,
            amount: req.body.amount || null,
            categoryId: req.body.categoryId || null,
            date: req.body.date || null,
            isReconciled: req.body.isReconciled || null,
            isPaid: req.body.isPaid || null,
            isRecurring: req.body.isRecurring || null,
            imageUrl: req.body.imageUrl || null,
            dueDate: req.body.dueDate || null,
            hasReceipt: req.body.hasReceipt || null
        }
        db.Transaction.update(updatedTrans, {
            where: {
                id: req.body.Id
            }
        }).then(result => res.json(result));
    }
}