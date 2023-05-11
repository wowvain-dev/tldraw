/** @public */
export type EditorAssetUrls = {
	fonts: {
		monospace: string
		serif: string
		sansSerif: string
		draw: string
	}
}

/** @public */
export let defaultEditorAssetUrls: EditorAssetUrls = {
	fonts: {
		draw: './fonts/Shantell_Sans-Normal-SemiBold.woff2',
		serif: './fonts/IBMPlexSerif-Medium.woff2',
		sansSerif: './fonts/IBMPlexSans-Medium.woff2',
		monospace: './fonts/IBMPlexMono-Medium.woff2',
	},
}

/** @internal */
export function setDefaultEditorAssetUrls(assetUrls: EditorAssetUrls) {
	defaultEditorAssetUrls = assetUrls
}
