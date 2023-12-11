const users = require("../Models/userSchema");

exports.addUser = async (req, res) => {
  console.log(req.file);
  console.log("inside add user function");
  const { fname, lname, email, mobile, gender, status, location } = req.body;

  try {
    const preuser = await users.findOne({ email });
    if (preuser) {
      res.staus(406).json("user already exits");
    } else {
      const newUser = new users({
        fname,
        lname,
        email,
        mobile,
        gender,
        status,
        profile: req.file.filename,
        location,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json("Error:" + err);
  }
};
