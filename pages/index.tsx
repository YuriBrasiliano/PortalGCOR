import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import { signOut, getSession} from "next-auth/react"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return{
      redirect:{
        destination: "/auth",
        permanent: false,
      }
    }
  }
  return{
    props: {}
  }
  
}


export default function Home() {

  const {data: user} = useCurrentUser();

  return (
    <>
    <h1>
      Portal Corpu
    </h1>
    <p>Salve {user?.name}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>Sair</button>
    </>
  )
}
