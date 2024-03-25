'use client'

import { BlogList } from '@/app/type';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation'

type PropType = {
    data: BlogList
}

const AppTable = (props: PropType) => {
    const { data } = props;

    const router = useRouter()

    const handleView = (id: number) => {
        router.push(`facebook/${id}`)
    }

    const handleEdit = () => {
        
    }

    const handleDelete = () => {
        
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => {
                            const {id, title, author, content} = item
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>{content}</td>
                                    <td>
                                        <Button onClick={() => handleView(id)} className='mb-2' variant="primary">View</Button>
                                        <Button onClick={() => handleEdit()} className='mb-2' variant="warning">Edit</Button>
                                        <Button onClick={() => handleDelete()} className='mb-2' variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default AppTable;