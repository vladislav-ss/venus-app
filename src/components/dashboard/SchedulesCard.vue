<template>
  <div class="schedules-card card">
    <h3 class="text-[18px] font-bold text-[#1B2559] mb-6">{{ formatDate(currentDate) }}</h3>

    <div class="schedules-list flex flex-col gap-6 mb-6">
      <div
        v-for="schedule in todaySchedules"
        :key="schedule.id"
        class="schedule-item flex items-start gap-3"
      >
        <div class="schedule-marker w-[3px] h-[46px] rounded-full bg-[#4318FF]"></div>
        <div class="flex-1">
          <p class="text-[14px] font-medium text-[#1B2559] mb-1">{{ schedule.title }}</p>
          <p class="text-[12px] text-[#A3AED0]">
            {{ formatTime(schedule.startTime) }} - {{ formatTime(schedule.endTime) }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="text-[#4318FF] text-sm font-medium flex items-center gap-2 hover:opacity-80">
        View all
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16666 10H15.8333"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8333 15L15.8333 10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8333 5L15.8333 10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { getSchedulesCurrentUser } from '@/api/schedulesApi';

interface Schedule {
  id: number;
  userId: number;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
}

const currentDate = new Date('2025-04-13');
const schedules = ref<Schedule[]>([]);

const todaySchedules = computed(() => {
  const today = currentDate.toISOString().split('T')[0];
  return schedules.value
    .filter((schedule) => schedule.date === today)
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .slice(0, 3);
});

function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  return day + ' ' + month;
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const period = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return formattedHour + ':' + minutes + ' ' + period;
}

// Fetch schedules on component mount
getSchedulesCurrentUser()
  .then((response) => {
    schedules.value = response;
  })
  .catch((error) => {
    console.error('Error fetching schedules:', error);
  });
</script>

<style scoped></style>
