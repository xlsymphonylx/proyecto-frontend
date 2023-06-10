<script setup>
import Swal from "sweetalert2";
import FeedbackForm from "./components/FeedbackForm.vue";
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";

import { submitFeedback, getComments } from "./services/feedbackService";
import CommentsTable from "./components/CommentsTable.vue";
import { ref } from "vue";
const comments = ref([]);

const showResult = async (feedback) => {
  const { result } = await submitFeedback(feedback);

  Swal.fire({
    title: result === "Positivo" ? "Positivo" : "Negativo",
    text:
      result === "Positivo"
        ? "El resultado del comentario es positivo"
        : "El resultado del comentario es negativo",
    icon: result === "Positivo" ? "success" : "error",
  });
};

const getCommentData = async () => {
  const { comments: entries } = await getComments();
  comments.value = entries;
};
</script>

<template>
  <div>
    <Navbar />
    <Content />
    <feedback-form @feedback="showResult" />
    <CommentsTable @collectComments="getCommentData" :comments="comments" />
    <footer class="bg-dark text-white text-center py-3">
      <p>Todos los derechos reservados &copy; Restaurante</p>
    </footer>
  </div>
</template>
