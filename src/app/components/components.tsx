'use client'
import { useRouter } from "next/navigation"

export default function Button (){
    const router = useRouter()
    const handleButton = () => {
        router.push('/login')
    }
    return(
        <button onClick={handleButton}>chuyển sang trang login</button>
    )
}