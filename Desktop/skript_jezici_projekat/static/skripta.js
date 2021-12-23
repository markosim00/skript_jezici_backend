function init() {
    
    fetch('http://localhost:8000/admin/users')
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('usrLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.email}</li>, Privilege: ${el.privilege}`;
            });
        });

        document.getElementById('usrBtn').addEventListener('click', e => {
            e.preventDefault();
    
            const data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                privilege: document.getElementById('privilege').value
            };
    
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('privilege').value = '';
    
            fetch('http://localhost:8000/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( data => {
                    document.getElementById('usrLst').innerHTML += `<li>ID: ${data.id}, Name: ${data.name}, E-mail: ${data.email}</li>, Privilege: ${data.privilege}`;
                })
        });
    
}