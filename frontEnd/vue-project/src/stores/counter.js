import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }
    let isDark = ref(false);
    //  更改主题
    function changeThem() {
        isDark.value = !isDark.value;
    }
    return { count, doubleCount, increment,isDark,changeThem }
})
