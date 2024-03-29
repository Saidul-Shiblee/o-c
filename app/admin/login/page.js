
'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../../../public/logo.png'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

export default Login;

function Login() {

const router=useRouter()
const { data: session } = useSession()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [loading, setLoading] = useState(false)
const [browser, setBrowser] = useState(false)

  useEffect(() => {
    setBrowser(true)
  }, [])


  const handleSignin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      console.log(res)
      if (!res.error) {
        router.replace("/admin");
      } else {
        toast({
          title: "Error",
          description: res?.error,
          variant: "destructive",
          className: 'top-0 right-0 flex fixed md:max-w-[300px] md:top-4 md:right-4'
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: res?.error,
        variant: "destructive",
        className: 'top-0 right-0 flex fixed md:max-w-[300px] md:top-4 md:right-4'
      })
    } finally{
      setLoading(false)
    }
  };



  if (browser && session) {
    router.replace('/admin')
  }


    return (
        <section className=" w-full h-screen flex justify-center items-center">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[345px] md:w-[450px]">
            <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className='w-full flex justify-center items-center'>
                <div className='w-12 h-12 relative overflow-hidden'>
                  <Image src={Logo} alt="logo" fill className='absolute rounded-full ' />
                </div>
                </div>
                
                
                <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  
                >
                  <div>
                    <label
                      for="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    
                  </div>
                  <div className='mb-4'>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                 
                  </div>

                <Button className="relative w-full " onClick={handleSignin} >
                  Login

                  {loading && <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-white border-[3px] h-6 w-6"></div>
                  </div>}

                </Button>
                
                </form>
              </div>
            </div>
          </div>
        </section>

    );
}
