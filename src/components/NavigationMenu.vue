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
            isActive(item.route)
              ? '!bg-primary !text-white'
              : '!text-text-secondary hover:bg-secondary/10 transition-colors',
          ]"
        >
          <router-link :to="item.route" class="flex items-center gap-3 w-full">
            <img
              :src="isActive(item.route) ? item.activeIcon : item.icon"
              :alt="`${item.name} Icon`"
            />
            <span :class="isActive(item.route) ? 'font-bold' : 'font-medium'">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
      <button
        class="logout flex items-center gap-3 p-3 rounded-lg !text-text-secondary hover:bg-red/20 transition-colors mt-auto"
      >
        <img src="@/assets/images/icons/menu/logout.svg" alt="Log Out Icon" />
        <span class="font-medium">Log Out</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import dashboardNormalIcon from '@/assets/images/icons/menu/dashboard-normal.svg';
import dashboardActiveIcon from '@/assets/images/icons/menu/dashboard.svg';
import activityIcon from '@/assets/images/icons/menu/activity.svg';
import activityActiveIcon from '@/assets/images/icons/menu/activity-active.svg';
import libraryIcon from '@/assets/images/icons/menu/library.svg';
import libraryActiveIcon from '@/assets/images/icons/menu/library-active.svg';
import securityIcon from '@/assets/images/icons/menu/security.svg';
import securityActiveIcon from '@/assets/images/icons/menu/security-active.svg';
import schedulesIcon from '@/assets/images/icons/menu/schedules.svg';
import schedulesActiveIcon from '@/assets/images/icons/menu/schedules-active.svg';
import payoutsIcon from '@/assets/images/icons/menu/payouts.svg';
import payoutsActiveIcon from '@/assets/images/icons/menu/payouts-active.svg';
import settingsIcon from '@/assets/images/icons/menu/settings.svg';
import settingsActiveIcon from '@/assets/images/icons/menu/settings-active.svg';
import burgerIcon from '@/assets/images/icons/menu/burger.svg';
import closeIcon from '@/assets/images/icons/menu/close.svg';

const route = useRoute();
const isMenuOpen = ref(false);

const menuItems = [
  { name: 'Dashboard', icon: dashboardNormalIcon, activeIcon: dashboardActiveIcon, route: '/' },
  { name: 'Activity', icon: activityIcon, activeIcon: activityActiveIcon, route: '/activity' },
  { name: 'Library', icon: libraryIcon, activeIcon: libraryActiveIcon, route: '/library' },
  { name: 'Security', icon: securityIcon, activeIcon: securityActiveIcon, route: '/security' },
  { name: 'Schedules', icon: schedulesIcon, activeIcon: schedulesActiveIcon, route: '/schedules' },
  { name: 'Payouts', icon: payoutsIcon, activeIcon: payoutsActiveIcon, route: '/payouts' },
  { name: 'Settings', icon: settingsIcon, activeIcon: settingsActiveIcon, route: '/settings' },
];

const isActive = (routePath: string) => {
  return route.path === routePath;
};
</script>

<style scoped>
.menu {
  z-index: 50;
}
</style>
