import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'

type Props = {}

const Login = (props: Props) => {
    return (
        <Fragment>
            <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <Input label='Email Address' type={"email"} placeholder="Email Address" />
                    <Input label='Password' type={"password"} placeholder="Password" />
                </div>





                <div className='space-y-3'>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            {/* <!-- Heroicon name: solid/lock-closed --> */}
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                    </button>
                    <div className="text-sm">
                        <Link to="register" className="font-medium text-indigo-600 hover:text-indigo-500"> Don't have an account? </Link>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Login