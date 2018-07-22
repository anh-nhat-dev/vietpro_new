const passport = require('passport');
const LocalStrategy = require('passport-local'); 
const bcrypt = require('bcrypt');
passport.serializeUser(function(user, done) {
    done(null, user);
});


passport.deserializeUser(function(user, done) {
    app.locals.user = user;
    done(null, user);
  });


passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    
    },
    function(username, password, done){
       
        conn.query(`SELECT * FROM account WHERE ?`, { acc_email: username }, function(err, result){

            if (err) return done(null, err)

            if (!result.length) {
                return done(null, false, { message: "Không tìm thấy tài khoản" })
            }

            const pass = result[0].acc_pass;
            const match = bcrypt.compareSync(password, pass);
            
            if (!match) {
                return done(null, false, { message: "Mật khẩu không chính xác" })
            }

            delete result[0].acc_pass;

            return done(null, result[0]);
        });

    }
))