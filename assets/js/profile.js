const showHidePassword = () => {
    let passwordInp = document.querySelectorAll(".password-inp"),
        showHideBtn = document.querySelectorAll('.show-hide-btn');

        showHideBtn.forEach((btn, i) => {
            btn.addEventListener('click', function () {
                if (passwordInp[i].type == "password") {
                    btn.innerHTML = `<i class="far fa-eye-slash"></i>`
                    passwordInp[i].type = "text"
                } else {
                    btn.innerHTML = `<i class="far fa-eye"></i>`
                    passwordInp[i].type = "password"
                }
            })
        });
    
}

showHidePassword()