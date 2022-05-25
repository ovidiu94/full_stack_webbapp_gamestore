const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  
  const {name , email , password} = req.body

  const newUser = new User({name , email , password})

  try {
     newUser.setPassword(req.body.password); 
      newUser.save()
      res.send('User Registered successfully')
  } catch (error) {
       return res.status(400).json({ message: error });
  }

//   // Creating empty user object 
//   let newUser = new User(); 

//   // Initialize newUser object with request data 
//   newUser.name = req.body.name, 

//   newUser.email = req.body.email,


//   newUser.password=req.body.password

//                   // Call setPassword function to hash password 
//                   newUser.setPassword(req.body.password); 

//   // Save newUser object to database 
//   newUser.save((err, User) => { 
//       if (err) { 
//           return res.status(400).send({ 
//               message : "Failed to add user."
//           }); 
//       } 
//       else { 
//           return res.status(201).send({ 
//               message : "User added successfully."
//           }); 
//       } 
//   }); 

});


router.post("/login", async(req, res) => {

  const {email , password} = req.body

  try {
      
      const user = await User.find({email , password})

      if(user.length > 0)
      {
          const currentUser = {
              name : user[0].name , 
              email : user[0].email, 
              isAdmin : user[0].isAdmin, 
              _id : user[0]._id
          }
          res.send(currentUser);
      }
      else{
          return res.status(400).json({ message: 'User Login Failed' });
      }

  } catch (error) {
         return res.status(400).json({ message: 'Something went weong' });
  }
      // Find user with requested email 
//   User.findOne({ email : req.body.email }, function(err, user) { 
//     if (user === null) { 
//         return res.status(400).send({ 
//             message : "User not found."
//         }); 
//     } 
//     else { 
//         if (user.validPassword(req.body.password)) { 
//             return res.status(201).send({ 
//                 message : "User Logged In", 
//             }) 
//         } 
//         else { 
//             return res.status(400).send({ 
//                 message : "Wrong Password"
//             }); 
//         } 
//     } 
// }); 

});


router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;

  try {
    await User.findOneAndDelete({ _id: userid });
    res.send("User Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
