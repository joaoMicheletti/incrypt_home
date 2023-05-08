const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const InputUser = document.querySelector("#user");
    const User = InputUser.value;

    const InputPass = document.querySelector("#pass");
    const Pass = InputPass.value;
    
    const Data = {
        User,
        Pass
    };

    //função responsael por logar!

    async function Request() { 
        await axios.post('http://localhost:3333/login_user', Data)
        .then((Response) =>{
            console.log(Response.data);
            if(Response.data === 'User ou Password incorrect!'){
                alert('User not found!');
            } else{
                alert('Acesso Permitodo');
            }

        }).catch(() =>{
            alert('Erro interno');
        })
        
    };

    Request();

});

///login_use