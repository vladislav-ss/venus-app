<template>
  <div>
    <!-- Burger Menu Button (Mobile Only) -->
    <button
      v-if="!isMenuOpen"
      @click="isMenuOpen = !isMenuOpen"
      class="lg:hidden fixed z-50 p-2 rounded-lg bg-white shadow-sm"
      :class="['top-4', 'left-4 md:left-6 lg:left-8']"
    >
      <img :src="burgerIcon" alt="Open Menu" class="w-6 h-6" />
    </button>

    <!-- Overlay (Mobile Only) -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="isMenuOpen = false"
    ></div>

    <!-- Menu -->
    <nav
      class="menu flex flex-col h-screen bg-white p-8 fixed w-[80%] md:w-[290px] transition-transform duration-300 ease-in-out"
      :class="[isMenuOpen ? 'translate-x-0' : '-translate-x-full', 'lg:translate-x-0']"
    >
      <!-- Close button -->
      <button
        @click="isMenuOpen = false"
        class="lg:hidden absolute top-4 right-4 p-2 rounded-lg border border-gray-100 hover:border-primary hover:bg-primary/10 transition-colors"
      >
        <img :src="closeIcon" alt="Close Menu" class="w-6 h-6" />
      </button>
      <div class="logo mb-8">
        <img src="@/assets/images/logo-w-text.svg" alt="Venus Logo" />
      </div>
      <div class="h-[1px] bg-gray-100 mb-8 -mx-8"></div>
      <ul class="menu-list flex flex-col gap-2 flex-grow">
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="menu-item flex items-center gap-3 p-3 rounded-lg"
          :class="[
            item.isActive
              ? '!bg-primary !text-white'
              : '!text-text-secondary hover:bg-secondary/10 transition-colors',
          ]"
        >
          <img :src="item.icon" :alt="`${item.name} Icon`" />
          <span :class="item.isActive ? 'font-bold' : 'font-medium'">{{ item.name }}</span>
        </li>
      </ul>
      <button
        class="logout flex items-center gap-3 p-3 rounded-lg !text-text-secondary hover:bg-red/20 transition-colors mt-auto"
      >
        <img src="@/assets/images/icons/logout.svg" alt="Log Out Icon" />
        <span class="font-medium">Log Out</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dashboardIcon from '@/assets/images/icons/dashboard.svg';
import activityIcon from '@/assets/images/icons/activity.svg';
import libraryIcon from '@/assets/images/icons/library.svg';
import securityIcon from '@/assets/images/icons/security.svg';
import schedulesIcon from '@/assets/images/icons/schedules.svg';
import payoutsIcon from '@/assets/images/icons/payouts.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';
import burgerIcon from '@/assets/images/icons/burger.svg';
import closeIcon from '@/assets/images/icons/close.svg';

const isMenuOpen = ref(false);

const menuItems = [
  { name: 'Dashboard', icon: dashboardIcon, isActive: true },
  { name: 'Activity', icon: activityIcon, isActive: false },
  { name: 'Library', icon: libraryIcon, isActive: false },
  { name: 'Security', icon: securityIcon, isActive: false },
  { name: 'Schedules', icon: schedulesIcon, isActive: false },
  { name: 'Payouts', icon: payoutsIcon, isActive: false },
  { name: 'Settings', icon: settingsIcon, isActive: false },
];
</script>

<style scoped>
.menu {
  z-index: 50;
}
</style>
