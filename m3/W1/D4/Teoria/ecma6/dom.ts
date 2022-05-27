let bottone = document.createElement('#myform');

bottone.addEventListener('click', function(e){
    e.preventDefault();

    let fields = Array.from(document.querySelectorAll<HTMLInputElement>('#myform input'))

    let values = fields.map((f:HTMLInputElement) => {
        if(f.value)
        return f.value
    })
    let valid:boolean = true;

    if(password.length < 8){
        valid = false;
    }

    for(let field of fields){
        if(!field.value){
            valid= false;
        }
    }


})