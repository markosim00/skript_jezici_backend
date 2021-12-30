function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    
    fetch('http://localhost:8000/admin/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('usrLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.email}, Privilege: ${el.privilege}</li>`;
            });
        });

    fetch('http://localhost:8000/admin/utakmicas', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('utakmiceLst');

            data.forEach( el => {
            lst.innerHTML += `<li>ID: ${el.id}, Domacin: ${el.domacin}, Gost: ${el.gost}, Rezultat domacin: ${el.rezDomacin},
            Rezultat gost: ${el.rezGost}, Dvorana: ${el.dvorana}, Datum: ${el.datum}, Vreme: ${el.vreme}</li>`;
            });
        });

    fetch('http://localhost:8000/admin/klubs', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('klubLst');

            data.forEach( el => {
            lst.innerHTML += `<li>ID: ${el.id}, Naziv: ${el.naziv}, Dvorana: ${el.dvorana}</li>`;
            });
        });

    fetch('http://localhost:8000/admin/takmicenjes', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('takmicenjaLst');

            data.forEach( el => {
            lst.innerHTML += `<li>ID: ${el.id}, Naziv: ${el.naziv}</li>`;
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
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( data => {
                    if(data.msg){
                        alert(data.msg);
                    }
                    else{
                        document.getElementById('usrLst').innerHTML += `<li>ID: ${data.id}, Name: ${data.name}, E-mail: ${data.email}, Privilege: ${data.privilege}</li>`;
                    }
                })
        });

        document.getElementById('utakmiceBtn').addEventListener('click', e => {
            e.preventDefault();
    
            const data = {
                domacin: document.getElementById('domacin').value,
                gost: document.getElementById('gost').value,
                rezDomacin: document.getElementById('rezDomacin').value,
                rezGost: document.getElementById('rezGost').value,
                dvorana: document.getElementById('dvorana').value,
                datum: document.getElementById('datum').value,
                vreme: document.getElementById('vreme').value
            };
    
            document.getElementById('domacin').value = '';
            document.getElementById('gost').value = '';
            document.getElementById('rezDomacin').value = '';
            document.getElementById('rezGost').value = '';
            document.getElementById('dvorana').value = '';
            document.getElementById('datum').value = '';
            document.getElementById('vreme').value = '';
    
            fetch('http://localhost:8000/admin/utakmicas', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( data => {
                    if(data.msg){
                        alert(data.msg);
                    }
                    else{
                        document.getElementById('utakmiceLst').innerHTML += `<li>ID: ${data.id}, Domacin: ${data.domacin}, Gost: ${data.gost}, Rezultat domacin: ${data.rezDomacin},
                        Rezultat gost: ${data.rezGost}, Dvorana: ${data.dvorana}, Datum: ${data.datum}, Vreme: ${data.vreme}</li>`;
                    }
                })
        });

        document.getElementById('kluboviBtn').addEventListener('click', e => {
            e.preventDefault();
    
            const data = {
                naziv: document.getElementById('nazivKluba').value,
                dvorana: document.getElementById('dvoranaKluba').value
            };
    
            document.getElementById('nazivKluba').value = '';
            document.getElementById('dvoranaKluba').value = '';
    
            fetch('http://localhost:8000/admin/klubs', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( data => {
                    if(data.msg)
                        alert(data.msg)
                    else
                        document.getElementById('klubLst').innerHTML += `<li>ID: ${data.id}, Naziv: ${data.naziv}, Dvorana: ${data.dvorana}</li>`;
                })
        });

        document.getElementById('takmicenjaBtn').addEventListener('click', e => {
            e.preventDefault();
    
            const data = {
                naziv: document.getElementById('nazivTakmicenja').value
            };
    
            document.getElementById('nazivTakmicenja').value = '';
    
            fetch('http://localhost:8000/admin/takmicenjes', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( data => {
                    if(data.msg){
                        alert(data.msg);
                    }
                    else
                        document.getElementById('takmicenjaLst').innerHTML += `<li>ID: ${data.id}, Naziv: ${data.naziv}</li>`;
                })
        });

        document.getElementById('logout').addEventListener('click', e => {
            document.cookie = `token=;SameSite=Lax`;
            window.location.href = 'login.html';
        });
    
}