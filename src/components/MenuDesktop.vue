<template>
  <nav class="menu flex flex-col h-screen w-[290px] bg-white p-8">
    <div class="logo mb-8">
      <img src="@/assets/images/logo-w-text.svg" alt="Venus Logo" />
    </div>
    <ul class="menu-list flex flex-col gap-2 flex-grow">
      <li class="menu-item flex items-center gap-3 p-3 rounded-lg bg-primary text-white">
        <img src="@/assets/images/icons/dashboard.svg" alt="Dashboard Icon" />
        <span class="font-bold">Dashboard</span>
      </li>
      <li
        class="menu-item flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
      >
        <img src="@/assets/images/icons/activity.svg" alt="Activity Icon" />
        <span class="font-medium">Activity</span>
      </li>
      <li
        class="menu-item flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
      >
        <img src="@/assets/images/icons/library.svg" alt="Library Icon" />
        <span class="font-medium">Library</span>
      </li>
      <li
        class="menu-item flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
      >
        <img src="@/assets/images/icons/security.svg" alt="Security Icon" />
        <span class="font-medium">Security</span>
      </li>
      <li
        class="menu-item flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
      >
        <img src="@/assets/images/icons/schedules.svg" alt="Schedules Icon" />
        <span class="font-medium">Schedules</span>
      </li>
      <li
        class="menu-item flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
      >
        <img src="@/assets/images/icons/payouts.svg" alt="Payouts Icon" />
        <span class="font-medium">Payouts</span>
      </li>
      <li
        class="menu-item flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
      >
        <img src="@/assets/images/icons/settings.svg" alt="Settings Icon" />
        <span class="font-medium">Settings</span>
      </li>
    </ul>
    <button
      class="logout flex items-center gap-3 p-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors mt-auto"
    >
      <img src="@/assets/images/icons/logout.svg" alt="Log Out Icon" />
      <span class="font-medium">Log Out</span>
    </button>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
