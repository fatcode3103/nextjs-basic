'use client'
 
import AppTable from '@/components/app.table'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from '../../axois'
import useSWR from "swr";
import Button from 'react-bootstrap/Button';
import BlogModal from '@/components/app.modal';

const fetcher = async(url: string) => await axios.get(url)

const Facebook = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const { data, error, isLoading } = useSWR(
        "blogs",
        fetcher
    );
    if(error) throw new Error(error)

    const router = useRouter()

    const handleAddNew = () => {
        setIsShowModal(true)
    }

    return <div>
        <div className="text-3xl font-bold underline">Facebook page</div>
        <button type="button" onClick={() => router.push('/')}>
            Back Home
        </button>
        {isLoading && <div>Loading...</div>}
        <BlogModal isShow={isShowModal} setIsShow={setIsShowModal}/>
        <div>
            <Button onClick={() => handleAddNew()} className='mt-4' variant="primary">Add new blog</Button>
        </div>
        <div className="mt-3"><AppTable data={data?.data}/></div>
    </div>
}

export default Facebook