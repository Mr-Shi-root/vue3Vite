<script setup lang="ts">
import { ref } from 'vue'
import { ElPopover } from 'element-plus';
import lodash from 'lodash-es';

const test = lodash.debounce(() => {
  console.log('test');
}, 1000);

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <ElPopover
    trigger="hover"
    placement="right"
    :popper-style="{
      borderRadius: '16px',
      boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.04)',
      border: 'none',
      background: 'transparent',
      minWidth: '0',
      padding: '0',
    }"
    :show-arrow="false"
    width="fit-content"
    :hide-after="0"
  >
    <template #reference>
      <a
        class="flex gap-[8px] rounded-[10px] border-[1px] border-solid border-[rgba(255,255,255,0.10)]"
        href="/ai-images"
      >
        <span
          class="text-[#D1D1D1] font-poppins-medium text-size-[12px] leading-[16px]"
          >Album</span
        >
      </a>
    </template>
    <template #default>
      <div class="album-entry-popover relative flex items-center"> Album </div>
    </template>
  </ElPopover>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
