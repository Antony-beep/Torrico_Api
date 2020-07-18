let db = require('../models/dbconexion');

let TodoItem = {
    listar( req, res ){
      let sql = "SELECT * FROM TodoItem";
      db.query(sql,function(err, result){
        if( err ){
          console.log(err);
          res.sendStatus(500);
        }else{
          res.json(result);
        }
      });
    },
    store( req, res ){
      val_name = req.body.name;
      val_lastname = req.body.lastname;
      val_gender = req.body.gender;
      val_datebirth = req.body.datebirth;
      let sql = "INSERT INTO TodoItem(name,lastname, gender, datebirth) VALUES(?,?,?,?)";
      db.query(sql,[val_name,val_lastname, val_gender, val_datebirth],function(err, newData){
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          res.json(newData);
        }
      });
    },
    show( req, res ){
      val_id = req.params.id;
      let sql = "SELECT * FROM TodoItem WHERE id=?";
      db.query(sql,[val_id],function(err, rowData){
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          res.json(rowData);
        }
      });
    },
    edit( req, res ){
      val_id = req.body.id;
      val_name = req.body.name;
      val_lastname = req.body.lastname;
      val_gender = req.body.gender;
      val_datebirth = req.body.datebirth;
      let sql = "UPDATE TodoItem SET name=?, lastname=?, gender=?, datebirth=? WHERE id=?";
      db.query(sql,[val_name, val_lastname, val_gender, val_datebirth, val_id],function(err, newData){
        if(err){
          res.sendStatus(500);
        }else{
          res.json(newData);
        }
      });
    },
    delete( req, res ){
      val_id = req.params.id;
      let sql = "DELETE FROM TodoItem WHERE id=?";
      db.query(sql,[val_id],function(err, newData){
        if(err){
          res.sendStatus(500);
        }else{
          res.sendStatus(200);
        }
      });
    }
  }
  
  module.exports = TodoItem;
  