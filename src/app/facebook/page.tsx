'use client'
 
import { useRouter } from 'next/navigation'

const Facebook = () => {

    const router = useRouter()

    return <div>
        <div className="text-3xl font-bold underline">Facebook page</div>
        <button type="button" onClick={() => router.push('/')}>
            Back Home
        </button>
    </div>
}

export default Facebook