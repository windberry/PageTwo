fetch('api.openweathermap.org/data/2.5/weather?id=2172797&appid=b124ec8d5546495f87d1cfc27038a5cc')
    .then(res => res.json())
    .then(data =>
    document.getElementById('root').innerHTML=
    JSON.stringify(data)
    )

