// custom-types.d.ts
interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    getMyId: () => string
}
