"use client"

import useSWR from "swr";
import axios from "@/axois"

const fetcher = async(url: string) => await axios.get(url)

const Page = ({ params }: { params: { blogId: string } }) => {

    const blogId = params.blogId

    const { data, error, isLoading } = useSWR(
        `blogs/${blogId}`,
        fetcher
    );
    if(error) throw new Error(error)

    return <div>
        {isLoading && <p>Loading...</p>}
        <p>id: {data?.data?.id || "null"}</p>
        <p>title: {data?.data?.title || "null"}</p>
        <p>author: {data?.data?.author || "null"}</p>
        <p>content: {data?.data?.content || "null"}</p>
    </div>
}

export default Page
