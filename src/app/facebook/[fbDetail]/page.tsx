const Page = ({ params }: { params: { fbDetail: string } }) => {
    return <div>Detail with id = {params.fbDetail}</div>
}

export default Page