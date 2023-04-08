import Input from "@/components/Input";
import { useState } from "react";

const Auth = () =>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState(''); 

    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover
        bg-center bg-fixed">
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 
                lg-max-w-md rounded-[50px] w-full m-auto" >
                    <img src="/images/logo.png" alt="logo" className="h-20 m-auto"/>
                    <h2 className="text-teal-400 text-4xl mb-8 font-semibold mt-[50px]">
                        Login
                    </h2>
                    <div className="flex flex-col gap-4">
                        <Input 
                        label="Usuário"
                        onChange={(ev:any) => setName(ev.target.value)}
                        id="name"
                        value={name}
                        />
                        <Input 
                        label="Senha"
                        onChange={(ev:any) => setPassword(ev.target.value)}
                        id="password"
                        type="password"
                        value={password}
                        />                        
                    </div>
                    <button className="bg-teal-400 py-3 text-white rounded-md w-full mt-10 hover:bg-teal-600
                    transition">
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth;
