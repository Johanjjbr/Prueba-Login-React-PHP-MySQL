import React,{useRef} from 'react';
import '../css/login.css';
const URL_LOGIN="http://localhost/ws-login/login.php";

const enviarData = async (url, data)=> {

    const resp= await  fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log(resp);
    const json = await resp.json()
    //console.log(json);
    
    return json;
}






export default function Login(props) {

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin= async() =>{
        const data = {
            "usuario" :  refUsuario.current.value,
            "clave" : refClave.current.value
        };
            console.log(data);
            const respJson = await enviarData(URL_LOGIN, data);
            console.log("respuesta desde el evento", respJson);

            props.acceder (respJson.conectado) 
    }


    return (
        <div className="login">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h3>💰 Avenir</h3>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    📧
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    ref={refUsuario}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">
                                    🔐
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    aria-label="clave"
                                    aria-describedby="basic-addon2"
                                    ref={refClave}
                                />
                            </div>
                            <button
                            onClick={handleLogin}
                            className='btn btn-info btn-lg '>Acceder</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}