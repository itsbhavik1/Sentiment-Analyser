import markdownToHtml from "@/utils/markdownToHtml"
import type { Message } from "ai/react"
import { useMemo } from "react"

export function ChatMessageBubble(props: {
	message: Message
	aiEmoji?: string
	sources: any[]
}) {
	const colorClassName = props.message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-black"
	const alignmentClassName = props.message.role === "user" ? "ml-auto" : "mr-auto"
	const prefix = props.message.role === "user" ? "You : " : props.aiEmoji

	const content = useMemo(() => {
		return markdownToHtml(props.message.content)
	}, [props.message.content])

	return (
		<div className={`${alignmentClassName} ${colorClassName} rounded-lg px-4 py-3 max-w-[80%] mb-4 flex shadow-lg`}>
			<div className="mr-3">{prefix}</div>
			<div className="whitespace-pre-wrap flex flex-col">
				<div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
				{props.sources && props.sources.length ? (
					<div className="mt-4">
						<div className="text-sm font-semibold mb-2">🔍 Sources:</div>
						<div className="text-xs bg-gray-200 p-2 rounded-lg">
							{props.sources?.map((source, i) => (
								<div className="mt-2" key={"source:" + i}>
									{i + 1}. &quot;{source.pageContent}&quot;
									{source.metadata?.loc?.lines !== undefined ? (
										<div>
											<br />
											Lines {source.metadata?.loc?.lines?.from} to {source.metadata?.loc?.lines?.to}
										</div>
									) : (
										""
									)}
								</div>
							))}
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	)
}