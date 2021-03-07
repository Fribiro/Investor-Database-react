const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../middleware/token");

// TODO: write the dbconnection and import it into the neccessary pages
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//async makessure the server waits for some actions which might take some time to be done
//login function
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
        message: "Please provide an email and password",
      });
    }
    db.query(
      "SELECT * FROM entrepreneurSignup WHERE email = ?",
      [email],
      async (error, results) => {
        //bcryptcompare compares the password being typed with the one in the db
        //console.log(results);
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          res.status(401).json({
            message: "Email or Password is incorrect",
          });
        } else {
          // const accesstoken = createAccessToken(results.Id);
          // const refreshtoken = createRefreshToken(results.Id);
          // //insert the refreshtoken into the db
          // results.refreshtoken = refreshtoken;
          // console.log(results);
          // //send refreshtoken as a cookie and the accesstoken as a regular response
          // sendRefreshToken(res, refreshtoken);
          // sendAccessToken(res, req, accesstoken);
        }
        res.status(200).json({ message: "Welcome Back" });
      }
    );
  } catch (error) {
    console.log(error);
  } finally {
  }
};

//signup function for investors
exports.investorsignup = (req, res) => {
  console.log(req.body); 

  const {
    ifirstName,
    ilastName,
    iemail,
    ipassword,
    iconfirmPassword
  } = req.body;

  //hinder sql injection by allowing each person to use only one email address
  db.query('SELECT email FROM investorSignup WHERE email = ?', [iemail], async (error, results) => {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      //prevent use of an email already in the db
      res.json({
        message: "Email exists",
      });
      return;
    } else if (ipassword !== iconfirmPassword) {
      res.json({
        message: 'Passwords do not match',
      });
    }
    //do 8 runds of hashing
    let hashedPassword = await bcrypt.hash(ipassword, 8);
    console.log(hashedPassword);
    //test
    //res.send('testing');

    db.query('INSERT INTO investorSignup SET ?', {
      firstName: ifirstName,
      lastName: ilastName,
      email: iemail,
      password: hashedPassword
    }, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        res.status(201).json({
          results,
        });
      }
    })
  });
}

//signup function for entrepreneurs
exports.entrepreneursignup = (req, res) => {
  console.log(req.body); //grabs data we sent from the Form

  const {
    efirstName,
    elastName,
    eemail,
    epassword,
    econfirmPassword,
  } = req.body;

  //hinder sql injection by allowing each person to use only one email address
  db.query(
    "SELECT email FROM entrepreneurSignup WHERE email = ?",
    [eemail],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        //prevent use of an email already in the db
         res.json({
          message:"email exists",
        });
        return;
      } else if (epassword !== econfirmPassword) {
        res.json({
        message: 'Passwords do not match',
      });
    }
      //do 8 runds of hashing
      let hashedPassword = await bcrypt.hash(epassword, 8);
      console.log(hashedPassword);
      //test
      //res.send('testing');

      db.query(
        "INSERT INTO entrepreneurSignup SET ?",
        {
          firstName: efirstName,
          lastName: elastName,
          email: eemail,
          password: hashedPassword,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            res.status(201).json({
              results
            })
          }
        }
      );
    }
  );
};
