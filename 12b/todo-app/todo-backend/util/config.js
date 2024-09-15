const MONGO_URL = process.env.MONGO_URL || undefined
const REDIS_URL = process.env.REDIS_URL || undefined

module.exports = {
  MONGO_URL: 'mongodb://test_app:AppTest123@localhost:3456/the_database',   //'mongodb+srv://test_fullstack:NeCaterinca333@cluster0.obatlyn.mongodb.net/todos_db?retryWrites=true&w=majority&appName=Cluster0',//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}