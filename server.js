const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'douguo'
})
connection.connect()
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});
app.get('/tel', (req, res) => {
    var tel = req.query.tel
    if (tel) {
        connection.query(`select * from user where tel='${tel}'`, function (err, rows, fields) {
            if (err) throw err
            res.send(rows)
        })
    } else {
        res.send("")
    }
})
app.get('/user', (req, res) => {
    var user = req.query.user
    if (user) {
        connection.query(`select * from user where username='${user}'`, function (err, rows, fields) {
            if (err) throw err
            res.send(rows)
        })
    } else {
        res.send("")
    }
})
app.post('/login', (req, res) => {
    var tel = req.body.tel
    var pwd = req.body.pwd
    connection.query(`select * from user where tel='${tel}' and password='${pwd}'`, function (err, rows, fields) {
        if (err) throw err
        res.send(rows)
    })
})
app.put('/update', (req, res) => {
    var tel = req.body.tel
    var pwd = req.body.pwd
    connection.query(`update user set password='${pwd}' where tel = '${tel}'`, function (err, rows, fields) {
        if (err) throw err
        res.send('密码修改成功！')
    })
})
app.put('/msg/:obj', (req, res) => {
    var obj = JSON.parse(req.params.obj)
    connection.query(`insert into user (username,tel,password) values ('${obj.username}','${obj.tel}','${obj.password}')`, function (err, rows, fields) {
        if (err) throw err
        res.end("注册成功！");
    })
})
app.get('/classify', (req, res) => {
    connection.query(`select * from classify`, function (err, rows, fields) {
        if (err) throw err
        res.send(rows)
    })
})
app.get('/', (req, res) => {
    var lim = req.query.lim
    var page = req.query.page
    if (lim == 2) {
        connection.query(`select * from content01  limit ${(page - 1) * lim},${lim}`, function (err, rows, fields) {
            res.send(rows)
        })
    } else if (lim == 10) {
        connection.query(`select * from content01  limit ${(page - 2) * lim + 2},${lim}`, function (err, rows, fields) {
            res.send(rows)
        })
    }
})
app.get('/list', (req, res) => {
    connection.query('select * from content01', function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/right', (req, res) => {
    connection.query('select * from con', function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/detail', (req, res) => {
    var id = req.query.id
    connection.query(`select * from listsss  where id=${id}`, function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/choiceness', (req, res) => {
    var page = req.query.page
    connection.query(`SELECT * from jingxuan limit ${(page - 1) * 24},24`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱最新页内容接口
app.get('/recent', (req, res) => {
    var page = req.query.page
    connection.query(`SELECT * from zuixin limit ${(page - 1) * 24},24`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱精选页数接口
app.get('/getpagea', (req, res) => {
    connection.query(`SELECT * from jingxuan`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱最新页数接口
app.get('/getpageb', (req, res) => {
    connection.query(`SELECT * from zuixin`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱分类接口
app.get('/classify', (req, res) => {
    connection.query(`select * from classify`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱菜单接口 默认最热
app.get('/hot', (req, res) => {
    var page = req.query.page
    connection.query(`SELECT * from caidan limit ${(page - 1) * 12},12`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱菜单 最热页数接口
app.get('/getpagec', (req, res) => {
    connection.query(`SELECT * from caidan`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱菜单接口 最新
app.get('/new', (req, res) => {
    var page = req.query.page
    connection.query(`SELECT * from caidan_zuixin limit ${(page - 1) * 12},12`, function (err, rows, fields) {
        res.send(rows)
    })
})
// 菜谱菜单 最新页数接口
app.get('/getpaged', (req, res) => {
    connection.query(`SELECT * from caidan_zuixin`, function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/food', (req, res) => {
    connection.query(`SELECT * from shicai`, function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/note', (req, res) => {
    connection.query(`select * from biji limit 100`, function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/shopping', (req, res) => {
    connection.query(`select * from sc limit 100`, function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/cartoon', (req, res) => {
    connection.query(`select * from dm`, function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/shopping-xq', (req, res) => {
    var id = req.query.id
    connection.query(`select * from sc where id=${id}`, function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/cartoon-xq', (req, res) => {
    var id = req.query.id
    connection.query(`select * from dm where id=${id}`, function (err, rows, fields) {
        res.send(rows)
    })
})
app.get('/note-xq', (req, res) => {
    var id = req.query.id
    connection.query(`select * from bijixq where id=${id}`, function (err, rows, fields) {
        res.send(rows)
    })
})

app.listen(port, () => console.log(`Example app listening on port port!`))