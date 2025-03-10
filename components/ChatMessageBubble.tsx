import type React from "react"

interface ChatMessageBubbleProps {
  message: {
    role: "user" | "assistant"
    content: string
  }
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ message }) => {
  // Add this helper function inside the ChatMessageBubble component
  const formatMessage = (content: string) => {
    if (content.includes("Transaction ID:") || content.includes("bought") || content.includes("purchased")) {
      return (
        <div>
          {content.split("\n").map((line, i) => {
            if (line.includes("Transaction ID:")) {
              return (
                <div key={i} className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                  {line}
                </div>
              )
            } else if (line.includes("bought") || line.includes("purchased")) {
              return (
                <div key={i} className="font-semibold">
                  {line}
                </div>
              )
            }
            return <div key={i}>{line}</div>
          })}
        </div>
      )
    }

    return content
  }

  return (
    <div
      className={`rounded-xl px-4 py-2 my-1 ${message.role === "user" ? "bg-blue-100 text-blue-800 ml-auto w-fit" : "bg-gray-100 text-gray-800 mr-auto w-fit"}`}
    >
      <div className="whitespace-pre-wrap">
        {typeof message.content === "string" ? formatMessage(message.content) : message.content}
      </div>
    </div>
  )
}

export default ChatMessageBubble

