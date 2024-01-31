import { defineComponent, h, Suspense } from 'vue'

const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout

export function flushPromises() {
    return new Promise((resolve) => {
        scheduler(resolve, 0)
    })
}

export function wrapInSuspense(component, { props }) {
    return defineComponent({
        render() {
            return h(
                'div',
                { id: 'root' },
                h(Suspense, null, {
                    default() {
                        return h(component, props)
                    },
                    fallback: h('div', 'fallback'),
                }),
            )
        },
    })
}