const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const db = require('../models');

let { Card } = db;

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/getTodo', (req, res) => {
  Card.findAll({
    where: {
      status: 'todo'
    }
  })
  .then(function (data) {
    res.send(data);
  });
});

router.get('/getInProgress', (req, res) => {
  Card.findAll({
    where: {
      status: 'inprogress'
    }
  })
  .then(function (data) {
    res.send(data);
  });
});

router.get('/getDone', (req, res) => {
  Card.findAll({
    where: {
      status: 'done'
    }
  })
  .then(function(data){
    res.send(data);
  });
});

router.post('/post', (req, res) => {
  Card.create(
  {
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  }
  )
  .then(results => {
    res.send(results);
  });
});

router.delete('/:id', (req, res) => {
  Card.destroy(
  {
    where: {id: `${req.params.id}`}
  }
  )
  .then(function () {
    res.end();
  });
});

router.put('/priority-update/:id', (req, res) => {
  Card.update(
  {
    priority: req.body.priority
  },
  {where: {id: `${req.params.id}`}}
  )
  .then(function() {
    res.end();
  });
});

router.put('/assignedTo-update/:id', (req, res) => {
  Card.update(
  {
    assignedTo: req.body.assignedTo
  },
  {where: {id: `${req.params.id}`}}
  )
  .then(function() {
    res.end();
  });
});

router.put('/status-next/:id', (req, res) => {
  console.log("Wtf", req.body);
  if(req.body.status === "todo"){
    Card.update(
    {
      status: "inprogress"
    },
    {where: {id: `${req.params.id}`}}
    )
    .then( () => {
      res.end();
    });
  }

  if(req.body.status === "inprogress"){
    Card.update(
    {
      status: "done"
    },
    {where: {id: `${req.params.id}`}}
    )
    .then ( () => {
      res.end();
    })
  }

});

router.put('/status-back/:id', (req, res) => {
  if(req.body.status === "inprogress"){
    Card.update(
    {
      status: "todo"
    },
    {where: {id: `${req.params.id}`}}
    )
    .then( () => {
      res.end();
    });
  }

  if(req.body.status === "done"){
    Card.update(
    {
      status: "inprogress"
    },
    {where: {id: `${req.params.id}`}}
    )
    .then ( () => {
      res.end();
    })
  }
})

module.exports = router;