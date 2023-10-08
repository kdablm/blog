import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useLanguageStore = defineStore('language', () => {
    const languageList = ["CHN", 'ENG']
    let languageIndex = ref(0);
    let language = reactive({
        navigationBar: {}
    });
    const getLanguage = computed(async () => {
        await axios.get(`/language/${languageList[languageIndex.value]}.json`)
            .then((res) => {
                (language = { ...res.data })
            })
            .catch(err => {
                return err;
            })
        return language
    });
    function chagneLanguage(language) {
        languageIndex.value = language;
    }
    return { getLanguage, chagneLanguage }
})
