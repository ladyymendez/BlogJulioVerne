import React, {Component} from 'react';

class Header extends Component {
    render (){
        return (
            <header>
                <h1 className="blog-title">
                    Todo lo que tiene que ver con LOVECRAFT
                </h1>
                <p>
                    aqui podras ppublicar y encontrar todo lo relacionado con el escritor, su obra, su cosmogonia y curiosidades en torno a la cultura Lovecraftiana
                </p>
            </header>
        )
    }
}

export default Header;