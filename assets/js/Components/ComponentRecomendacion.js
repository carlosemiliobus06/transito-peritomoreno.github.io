class ComponentRecomendacion {
    constructor(props, fade){
        this.props = props;
        this.fade = fade;
    }
    render = function() {

        const div = document.createElement("div");
        div.classList.add("card");
        div.classList.add(this.fade);
        div.setAttribute("data-animation", this.fade);

        for (let value of this.props.values) {
            const element = document.createElement("div");
            element.classList.add("card-body")
            
            const p = document.createElement("p");
            p.classList.add("p-info");

            element.appendChild(p);
            p.innerText = value;
            div.appendChild(element);
            
        }

        return div;
    }
}

export {ComponentRecomendacion};