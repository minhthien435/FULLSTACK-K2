
class F8{
    static create (tag,callback){
        class Component extends HTMLElement{  
            connectedCallback(){
              var shadowRoot = this.attachShadow({
                mode:"open",
              });
              shadowRoot.innerHTML =`<h1>Hello world</h1>`
                
            }
        }
        customElements.define(tag,Component);

    }
}
F8.create("hello-word",function() {});