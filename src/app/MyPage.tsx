'use client'

import AppHeader from "@/components/app.header";
import AppTable from "@/components/app.table";

const MyPage = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <AppHeader/>
            <div className="mx-[14%] my-3">
                <div className="my-3">{children}</div>
                <div className="px-4 mt-5"><AppTable data={[1, 2, 3]}/></div>
            </div>
        </>
    );
}

export default MyPage
