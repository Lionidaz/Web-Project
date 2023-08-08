const body = document.querySelector("body")
        Name = body.querySelector(".name")
        sidebar = body.querySelector(".sidebar")
        toggle = body.querySelector(".toggle")
        SearchBar = body.querySelector(".search-box")
        modeswitch = body.querySelector(".toggle-switch")
        modeText = body.querySelector(".mode-text")

        toggle.addEventListener("click", () =>{
                sidebar.classList.toggle("close");
        })
        SearchBar.addEventListener("click", () =>{
                sidebar.classList.remove("close");
        })

        modeswitch.addEventListener("click", () =>{
                body.classList.toggle("dark");

                if(body.classList.contains("dark")){
                        modeText.innerText = "Light Mode"
                }else{
                        modeText.innerText = "Dark Mode"
                }
        })
