'use client'
import { useEffect, useState } from "react";
import { FiShare, FiLink, FiCheck } from "react-icons/fi";

interface shareData {
  title: string;
  text: string;
  url: string;
}

function handleShare(data: shareData, setShared: Function, shareable: boolean) {
  if(shareable) {
    try {
      navigator.share(data)
    } catch (error) {}
  } else {
    navigator.clipboard.writeText(data.url)
    setShared(true)
    setTimeout(() => setShared(false), 20000)
  }
}

function ShareBtn({ title, text, url }: { title: string, text: string, url?: string }) {
  const [pageUrl, setPageUrl] = useState("")
  const [shareable, setShareable] = useState(false)
  const [shared, setShared] = useState(false)
  useEffect(() => {
    setShareable(typeof window !== 'undefined' && navigator && navigator?.share !== undefined)
    setPageUrl(window.location.href)
  }, [])
  const shareData: shareData = {
    title,
    text,
    url: url === undefined ? pageUrl : url
  }

  return (
    <button
      className="flex flex-row justify-center items-center text-gray-500 hover:text-gray-300 text-md sm:text-md transition-all duration-300"
      onClick={() => handleShare(shareData, setShared, shareable)}
    >
      {
        shareable ?
        <FiShare />:
        shared ?
        <FiCheck />:
        <FiLink />
      }
      <p className="ml-2 font-mono text-md">{shareable ? "Share": shared ? "Copied":"Link"}</p>
    </button>
  )
}

export default ShareBtn;