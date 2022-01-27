class Input {
    $container;
    $title;
    $linkInput;
    $lnkOutPut;
    $someNote;

    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("input-Container");
        
        this.$title = document.createElement("div");
        this.$title.innerText = "Link Shortener";
        this.$title.classList.add("input-Title")
        
        this.$linkInput = new InputGroup(
            "Enter a link",
            "url",
            "url",
            "arrow_forward");
        
        this.$linkInput.$container.classList.add("input-formContainer")
        this.$linkInput.$input.placeholder = "https://yoursite.com"

        this.$linkInput.$btn.addEventListener("click", (e)=>{this.shortBtn(e)})

        this.$lnkOutPut = new InputGroup(
            "Shortened link",
            "url","url_output",
            "content_copy"
        )

        
        // this.$lnkOutPut = new InputGroup("Shortened link", "url", "output");
        this.$lnkOutPut.$input.disabled = true;
        this.$lnkOutPut.$input.style.background = "lightgray";
        this.$lnkOutPut.$input.style.borderRadius = "10px";
        this.$lnkOutPut.$input.style.padding = "10px";

        this.$lnkOutPut.$container.addEventListener("result", this.handleRs)
        
        this.$lnkOutPut.$btn.addEventListener("click", (e)=>{
            let evnt = new CustomEvent("copy", {
                bubbles:true
            })

            this.$container.dispatchEvent(evnt);
        })

        // this.$linkInput.$btn.addEventListener("click", this.btnShort)
         
    };

    
    
    render(){
        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$linkInput.render())
        this.$container.appendChild(this.$lnkOutPut.render())
        // this.$container.appendChild(this.$btn)
        return this.$container;
    }

    shortBtn(e){
        // console.log(this.$linkInput.$input.value)
        let event = new CustomEvent("short-link", {
            bubbles:true,
            detail: {
                url : this.$linkInput.$input.value
            }
        })

        this.$container.dispatchEvent(event);
        // console.log(event)
    }

    handleRs(e){
        console.log(e)
    }

}

class InputGroup {
    $container;
    $label;
    $input;
    $input_container;
    $btn;
    $feedback_msg;

    constructor(label, type, name, btn){
        this.$container = document.createElement("div");
        this.$label = document.createElement("label");
        this.$label.innerText = label;

        this.$input_container = document.createElement("div");
        this.$input_container.classList.add("input-container-inline")

        this.$input = document.createElement("input");
        this.$input.type = type;
        this.$input.name = name;

        this.$btn = document.createElement("button")
        this.$btn.innerHTML = `<span class="material-icons"> ${btn} </span>`
        
        this.$feedback_msg = document.createElement("div");
        this.$feedback_msg.classList.add("input-fbMsg")

    }

    setMsg(msg) {
        if (msg)
            this.$feedback_msg.innerText = msg;
        else 
            this.$feedback_msg.innerText = "";
    }

    getVal(){
        return this.$input.value;
    }

    setVal(val) {
        this.$input.value = val;
    }

    render(){
        this.$input_container.appendChild(this.$input)
        this.$input_container.appendChild(this.$btn)
        this.$label.appendChild(this.$input_container);
        
        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$feedback_msg);

        return this.$container;
    }
}

export {
    Input
}