fetch('http://localhost:8080/Glasss/api/users/*', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/html'
    },
    body: 'name=Vicente'
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));