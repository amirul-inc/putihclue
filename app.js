const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan');
const mongoose = require('mongoose')
const multer = require('multer');
const WithAuth = require('./middleware/Auth')
var jwt = require('jsonwebtoken');
require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tenantRouter = require('./routes/tenant')
const itemRouter = require('./routes/item')
const orderRouter = require('./routes/order')

const app = express();
const mongodConnect = process.env.MONGOLAB_URI

mongoose.connect(mongodConnect)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});


const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



app.use(cors());
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: false
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('secretKey', process.env.SECRET_JWT)

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', upload.single('image'), tenantRouter);
app.use('/api', upload.single('image'), itemRouter);
app.use('/api', WithAuth.validateUser, orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
