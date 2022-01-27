import { Input } from "./components/input.js";

class App {
    $container;
    $mainApp;

    constructor(){
        this.$container = document.createElement("div");
        this.$mainApp = new Input();

        this.$container.addEventListener("short-link", (e)=>{
            this.shortBtn(e)
        })

        this.$container.addEventListener("copy", (e)=>{
            this.copyBtn(e)
        })
        // this.$mainApp.$linkInput.$btn.onclick = this.shortBtn
    }

    render(){
        this.$container.appendChild(this.$mainApp.render());
        return this.$container
    }


    // Handle logic here
    shortBtn(e){
        let inputStr = e.detail.url
        // console.log(inputStr)
        let url_encode
        try {

            url_encode = new URL(inputStr)
            console.log(url_encode.toString())
        } catch ( _ ) {
            // this.$mainApp.$lnkOutPut.setMsg("Invalid URL")
            console.log("Invalid URL")
            this.$mainApp.$linkInput.setMsg("Invalid URL");
            return null
        }
        this.$mainApp.$linkInput.setMsg();

        const api_url = `https://api.shrtco.de/v2/shorten?url=${url_encode}`
        // console.log(api_url)
        fetch(
            api_url, {
                method: 'post'
            }
        ).then(rs => rs.json())
        .then((rs)=>{
            console.log(rs)
            let sht_lnk = rs.result.short_link;
            
            let event = new CustomEvent("result", {
                bubbles:true,
                detail: sht_lnk
            })

            // document.body.dispatchEvent(event);
            console.log(sht_lnk)
            this.$mainApp.$lnkOutPut.$input.value = sht_lnk;
        })

    
    }

        
    copyBtn(e){
        let url = this.$mainApp.$lnkOutPut.getVal();

        navigator.clipboard.writeText(url).then(()=>{
            this.$mainApp.$lnkOutPut.setMsg("Đã sao chép liên kết ngắn vào khay nhớ tạm");
        })
    }

}

let app = new App()
// let input = new Input();
document.body.appendChild(app.render())

