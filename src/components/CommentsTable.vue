<template>
  <div class="my-3 mx-auto container ">
    <table class="table table-striped" v-if="isThereComments">
      <thead>
        <tr>
          <th scope="col">Comentario</th>
          <th scope="col">Tipo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.comment">
          <td>{{ comment.comment }}</td>
          <td>{{ comment.type }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button class="btn btn-primary" @click="collectComments">
        Ver Comentarios
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, getCurrentInstance, defineProps } from "vue";

const props = defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
});

const instance = getCurrentInstance();
const comments = ref(props.comments);
const isThereComments = ref(false);

watch(
  () => props.comments,
  (newComments) => {
    comments.value = newComments;
    isThereComments.value = newComments.length > 0;
  }
);
function collectComments() {
  // Emit the event to notify the parent component to collect comments
  instance.emit("collectComments");
}
</script>

<style scoped>
/* Add Bootstrap CSS classes here */
</style>
