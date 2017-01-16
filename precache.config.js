module.exports={
    staticFileGlobs:[
        'index.html',
        'index.html?homescreen=1',
        '/',
        '/?homescreen=1',
        'images/logo.png'
    ],  
    runTimeCaching:[{
        urlPattern: /jsonplaceholder\.typicode\.com\/users/,
        handler : 'cacheFirst'
    }]

};