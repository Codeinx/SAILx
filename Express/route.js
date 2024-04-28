const route = (app) => {

    const users = {
        name: 'Teni',
        age: 22,
        class: 'BatchB'
    };

    const userList = [];

    app.get('/home', (req, res)=> {
        console.log(req);
        res.send(JSON.stringify('Welcome Home!'));
    })
    
    app.get('/class', (req, res)=> {
        console.log(req.url);
        res.status(200).send(JSON.stringify('You are in Class route...'))
    })
    
    app.get('/users', (req, res)=> {
        console.log(req.url);
        res.status(200).send(users)
    })
    
    app.post('/users', (req, res)=> {
        userList.push('Sample')
        res.status(200).send(userList)
    })

}

module.exports = route;