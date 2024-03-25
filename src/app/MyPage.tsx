'use client'

import AppHeader from "@/components/app.header";

const MyPage = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <AppHeader/>
            <div className="mx-[14%] my-3">
                <div className="my-3">{children}</div>
            </div>
        </>
    );
}

export default MyPage
