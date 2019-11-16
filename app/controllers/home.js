const UsersModel = require('../models/User')

exports.homeView = async (req, res) => {
  try {
    const users = await UsersModel.find().exec()
    res.render('home', {
      users
    })
  } catch (error) {
    res.render('error', {
      error
    })
  }
}

exports.addView = (req, res) => {
  res.render('home/add')
}
