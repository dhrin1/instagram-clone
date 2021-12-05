import { getProviders, signIn as SignInProvider } from "next-auth/react"
import Header from '../../components/header'
import { useEffect } from "react"

export default function SignIn({ providers }) {
  useEffect(() => {
    document.title = 'Instagram 2.0'
  }, [])
  return (
    <>
    <Header />
    
      <div className="flex flex-col items-center justify-center -mt-24 h-screen py-2 px-14 text-center">
          <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
          <p className="text-xs italic">Use this provider to enable to login</p>
           <div className="mt-28" >
                {Object.values(providers).map((provider) => (
                <div key={provider.name}  >
                    <button className="p-2 bg-white hover:bg-gray-50 rounded-md border border-gray-300 text-gray-500 font-normal text-sm inline-flex space-x-2" onClick={() => SignInProvider(provider.id, {callbackUrl: '/'})}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" className="w-5" alt="" />  <p>Sign in with {provider.name}</p>
                    </button>
                </div>
                ))}
            </div>
          
      </div>
     
    </>
  )
}


export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
