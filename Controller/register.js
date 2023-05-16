const arr = [];
const saltRounds = 10;
const secretKey = "akarshgupta";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const details = req.body;
  const user = arr.find((item) => details.email === item.email);

  if (user) {
    return res.status(200).send({ msg: "User already exists. Try to login." });
  }

  try {
    const hashPassword = await bcrypt.hash(details.password, saltRounds);
    const obj = {
      email: details.email,
      password: hashPassword,
      name: details.name,
      contact: details.contact,
    };

    arr.push(obj);
    console.log(arr);
    res.send(arr);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const details = req.body;
  const user = arr.find((item) => details.email === item.email);

  if (!user) {
    return res.send({ msg: "User is not registered. Try to register first." });
  }

  const validate = await bcrypt.compare(details.password, user.password);
  if (validate) {
    const token = await jwt.sign(user.email, secretKey);
    return res.send({ token: token, msg: "User logged in successfully." });
  }

  return res.send({ msg: "User password does not match." });
};

module.exports = { register, login };