import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AuthLayout = (props: Props) => {
    return (
        <Fragment>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <Outlet />
                </div>
            </div>

        </Fragment>
    )
}

export default AuthLayout