<template>
  <nav class="menu flex flex-col h-screen w-[290px] bg-white p-8">
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
            ? '!bg-[#4318ff] !text-white'
            : '!text-[#A3AED0] hover:!text-[#1b2559] hover:bg-white transition-colors',
        ]"
      >
        <img :src="item.icon" :alt="`${item.name} Icon`" />
        <span :class="item.isActive ? 'font-bold' : 'font-medium'">{{ item.name }}</span>
      </li>
    </ul>
    <button
      class="logout flex items-center gap-3 p-3 rounded-lg !text-[#A3AED0] hover:!text-[#1b2559] hover:bg-white transition-colors mt-auto"
    >
      <img src="@/assets/images/icons/logout.svg" alt="Log Out Icon" />
      <span class="font-medium">Log Out</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import dashboardIcon from '@/assets/images/icons/dashboard.svg';
import activityIcon from '@/assets/images/icons/activity.svg';
import libraryIcon from '@/assets/images/icons/library.svg';
import securityIcon from '@/assets/images/icons/security.svg';
import schedulesIcon from '@/assets/images/icons/schedules.svg';
import payoutsIcon from '@/assets/images/icons/payouts.svg';
import settingsIcon from '@/assets/images/icons/settings.svg';

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

<style scoped></style>
