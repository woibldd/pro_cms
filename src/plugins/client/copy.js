
import Clipboard from 'clipboard'

const Copy = {

}
function clipboardSuccess() {
    Vue.prototype.$toast({
        message: '复制成功',
        type: 'success',
        duration: 1500
    })
}

function clipboardError() {
    Vue.prototype.$toast({
        message: '复制失败',
        type: 'error'
    })
}


Copy.install = function (Vue, options) {
    if(Vue.prototype.$copy) return 
    Vue.prototype.$copy = function handleClipboard(text, event) {
        const clipboard = new Clipboard(event.target, {
            text: () => text
        })
        clipboard.on('success', () => {
            clipboardSuccess()
            clipboard.destroy()
        })
        clipboard.on('error', () => {
            clipboardError()
            clipboard.destroy()
        })
        clipboard.onClick(event)
    }
}