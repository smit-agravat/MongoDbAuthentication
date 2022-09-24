import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Forgotpassword() {

    const emailRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()
    
    async function handleSubmit(event){
       
    }

  return (
    <>
    <Card className='shadow-lg p-3 mb-2 bg-white rounded'>
        <Card.Body>
            <h2 className='text-center mb-4'>Password Reset</h2>
            <Alert variant='danger'></Alert>
            {message && <Alert variant='success'>{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref = {emailRef} required />
                </Form.Group>
                <Button disabled = {loading} className='w-100 mt-4 mb-4' type='submit'>Reset Password</Button>
            </Form>
            <div className='w-100 text-center mt-2'>
                <Link to='/login'>Log In</Link>
            </div>
            <div className='w-100 text-center mt-2'>
                Need an Account? <Link to='/signup'>Sing Up</Link>
            </div>
        </Card.Body>
    </Card>
    </>
  )
}
