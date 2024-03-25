import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from '@/axois'
import { useSWRConfig } from "swr"

type PropType = {
  isShow: boolean,
  setIsShow: (val: boolean) => void
}

function BlogModal({isShow, setIsShow}:PropType) {

  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const { mutate } = useSWRConfig()

  const postNewBlog = async() => {
    const dataSend = {
      title,
      author,
      content
    }
    const res = await axios.post('blogs', dataSend)
    if(res.status === 201){
      alert('Create success')
    }else{
      throw new Error('Creat new blog failed')
    }
    mutate('blogs')
  }

  const handleSave = async() => {
    setIsShow(false)
    await postNewBlog()
  }

  return (
    <>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control onChange={(e) => setContent(e.target.value)} as="textarea" placeholder="Enter content" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogModal;