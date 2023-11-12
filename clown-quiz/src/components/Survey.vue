<template>
  <div>
    <pre>{{ question }}</pre>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const question = ref(null);

    onMounted(async () => {
      import('../questions.json').then((module) => {
        question.value = module.default;
      }).catch((error) => {
        console.error('Error importing questions.json:', error);
      });
    });

    return {
      question
    };
  }
}
</script>

