import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from "vue-router"

export function useAuth() {
  const route = useRoute()
  const router = useRouter();
  const isAuthenticated = ref(false)
  const fakeAccount = reactive({
    login: "demo",
    password: "demo"
  })

  const formData = reactive({
    login: null,
    password: null
  })
  
  function singIn () {
    try {
      if(formData.login === fakeAccount.login && formData.password && fakeAccount.password) {
        const accessToken = new Date().getTime() + Math.random()
        localStorage.setItem("accessToken", JSON.stringify(accessToken))
        isAuthenticated.value = false
        router.push({ path: "/"})
      } else {
        isAuthenticated.value = true
      }
    } catch (error) {
      return { error, message: "Ошибка при авторизации" }
    }
  }

  const isFilled = computed(() => {
    if(formData.login && formData.password) return true
    return false
  })

  return {
    isAuthenticated,
    formData,
    isFilled,
    singIn,
  }
}