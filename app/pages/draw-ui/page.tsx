/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import React from 'react'
import { PreviewShapeUtil } from '../../PreviewShape/PreviewShape'
import { ExportButton } from '../../components/ExportButton'
import { useBreakpoint } from '@tldraw/tldraw'
import { APIKeyInput } from '../../components/APIKeyInput'

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
	ssr: false,
})

const shapeUtils = [PreviewShapeUtil]

export default function Home() {
	return (
		<>
			<div className={'tldraw__editor'}>
				
				<Tldraw persistenceKey="tldraw" shapeUtils={shapeUtils} shareZone={<ExportButton />}>
					<APIKeyInput />
				</Tldraw>
			</div>
		</>
	)
}
