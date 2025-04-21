<template>
  <splitpanes
    class="default-theme"
    :push-other-panes="false"
    style="height: 400px"
  >
    <pane min-size="20">1</pane>
    <pane>2</pane>
    <pane>3</pane>
  </splitpanes>
</template>

<script setup>
import { reactive } from "vue";
import { Splitpanes, Pane } from "@/components/splitpanes/index";

const panes = reactive([
  { content: "Pane 1 content.", size: 30 },
  { content: "Pane 2 content.", size: 15 },
  { content: "Pane 3 content.", size: 25 },
]);
</script>

<style lang="scss">
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5em;
}
</style>
