import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    let isDark = ref(false);
    //  更改主题
    function changeThem() {
        isDark.value = !isDark.value;
    }
    return {isDark,changeThem }
})
