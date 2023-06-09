import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { useRouter } from 'next/router';
import {signIn} from "next-auth/react"

const Auth = () =>{

    const [email, setEmail] = useState('');
    const router = useRouter();
    const [password, setPassword] = useState('');


    const login = useCallback(async () => {
        try{
            await signIn('credentials',{
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });

            router.push('/')
        }catch(error){
            console.log(error)
        }

      }, [email, password, router])
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
                        label="Email"
                        onChange={(ev:any) => setEmail(ev.target.value)}
                        id="email"
                        value={email}
                        />
                        <Input 
                        label="Senha"
                        onChange={(ev:any) => setPassword(ev.target.value)}
                        id="password"
                        type="password"
                        value={password}
                        />                        
                    </div>
                    <button onClick={login} className="bg-teal-400 py-3 text-white rounded-md w-full mt-10 hover:bg-teal-600
                    transition">
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth;
